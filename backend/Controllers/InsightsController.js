const { GoogleGenerativeAI } = require("@google/generative-ai");
const { HoldingsModel } = require("../model/HoldingsModel");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports.ExplainPortfolio = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});

    if (!holdings || holdings.length === 0) {
      return res.status(200).json({
        success: true,
        explanation: "You don't have any holdings yet, so there's nothing to explain. Once you buy some stocks, come back here for insights.",
      });
    }

    // Step 1: Calculate real numbers ourselves (not left to the AI to guess)
    let totalInvested = 0;
    let totalCurrentValue = 0;

    const holdingsWithMetrics = holdings.map((h) => {
      const invested = h.avg * h.qty;
      const currentValue = h.price * h.qty;
      const pnl = currentValue - invested;
      const pnlPercent = (pnl / invested) * 100;

      totalInvested += invested;
      totalCurrentValue += currentValue;

      return {
        name: h.name,
        qty: h.qty,
        invested,
        currentValue,
        pnl,
        pnlPercent,
      };
    });

    const totalPnl = totalCurrentValue - totalInvested;
    const totalPnlPercent = (totalPnl / totalInvested) * 100;

    const sortedByPnl = [...holdingsWithMetrics].sort((a, b) => b.pnlPercent - a.pnlPercent);
    const topGainer = sortedByPnl[0];
    const topLoser = sortedByPnl[sortedByPnl.length - 1];

    const sortedByValue = [...holdingsWithMetrics].sort((a, b) => b.currentValue - a.currentValue);
    const biggestHolding = sortedByValue[0];
    const concentrationPercent = (biggestHolding.currentValue / totalCurrentValue) * 100;

    // Step 2: Build a clear prompt with our calculated numbers
    const prompt = `You are a helpful financial assistant. Explain the following stock portfolio performance in 3-4 short, plain-English sentences. Be factual and clear, do not give financial advice or recommendations to buy/sell.

Portfolio summary:
- Total invested: ₹${totalInvested.toFixed(2)}
- Current value: ₹${totalCurrentValue.toFixed(2)}
- Overall P&L: ₹${totalPnl.toFixed(2)} (${totalPnlPercent.toFixed(2)}%)
- Best performing stock: ${topGainer.name} (${topGainer.pnlPercent.toFixed(2)}%)
- Worst performing stock: ${topLoser.name} (${topLoser.pnlPercent.toFixed(2)}%)
- Largest holding by value: ${biggestHolding.name}, making up ${concentrationPercent.toFixed(1)}% of the total portfolio value

Write the explanation now.`;

    // Step 3: Ask Gemini to turn these numbers into plain English
    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });
    const result = await model.generateContent(prompt);
    const explanation = result.response.text();

    res.status(200).json({
      success: true,
      explanation,
      metrics: {
        totalInvested,
        totalCurrentValue,
        totalPnl,
        totalPnlPercent,
      },
    });
  } catch (error) {
    console.error("Error generating portfolio explanation:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while generating your portfolio insights.",
    });
  }
};