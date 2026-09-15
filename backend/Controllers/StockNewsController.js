const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const TICKER_TO_COMPANY = {
  INFY: "Infosys",
  TCS: "Tata Consultancy Services",
  RELIANCE: "Reliance Industries",
  HDFCBANK: "HDFC Bank",
  SBIN: "State Bank of India",
  WIPRO: "Wipro",
  ITC: "ITC Limited",
  "M&M": "Mahindra and Mahindra",
  ONGC: "Oil and Natural Gas Corporation",
  KPITTECH: "KPIT Technologies",
  QUICKHEAL: "Quick Heal Technologies",
  TATAPOWER: "Tata Power",
  BHARTIARTL: "Bharti Airtel",
  HINDUNILVR: "Hindustan Unilever",
  SGBMAY29: "Sovereign Gold Bond",
};

module.exports.ExplainStockMovement = async (req, res) => {
  try {
    const { stockName } = req.params;
    const searchTerm = TICKER_TO_COMPANY[stockName.toUpperCase()] || stockName;

    if (!stockName) {
      return res.status(400).json({ success: false, message: "Stock name is required." });
    }

    // Step 1: Fetch recent news about this stock
    const newsResponse = await axios.get("https://gnews.io/api/v4/search", {
      params: {
        q: `${searchTerm} stock India`,
        lang: "en",
        max: 5,
        apikey: process.env.GNEWS_API_KEY,
      },
    });

    const articles = newsResponse.data.articles || [];

    if (articles.length === 0) {
      return res.status(200).json({
        success: true,
        explanation: `No recent news found for ${stockName}. Price movement may be due to general market conditions rather than company-specific news.`,
      });
    }

    // Step 2: Build a summary of headlines to hand to Gemini
    const headlinesText = articles
      .map((a, i) => `${i + 1}. ${a.title} — ${a.description || ""}`)
      .join("\n");

    const prompt = `You are a financial news assistant. Based on the following recent news headlines about ${stockName}, write a short 2-3 sentence plain-English explanation of what might be driving recent interest or movement in this stock. Be factual, do not give investment advice or predictions.

Recent headlines:
${headlinesText}

Write the explanation now.`;

    // Step 3: Ask Gemini to summarize
    // Step 3: Ask Gemini to summarize (retry once if it's temporarily overloaded)
    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

    let explanation;
    try {
      const result = await model.generateContent(prompt);
      explanation = result.response.text();
    } catch (err) {
      if (err.status === 503) {
        console.log("Gemini overloaded, retrying once...");
        await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2s
        const retryResult = await model.generateContent(prompt);
        explanation = retryResult.response.text();
      } else {
        throw err;
      }
    }

    res.status(200).json({
      success: true,
      explanation,
      sources: articles.map((a) => ({ title: a.title, url: a.url })),
    });
  } catch (error) {
    console.error("Error explaining stock movement:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching stock news insights.",
    });
  }
};