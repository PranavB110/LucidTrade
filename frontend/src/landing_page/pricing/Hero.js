import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="text-center p-5 border-bottom">
        <h2>Charges</h2>
        <h3 className="text-muted fs-5"> List of all charges and taxes</h3>
      </div>
      <div className="row text-center p-5">
        <div className="col-4">
          <img src="media/images/pricing0.svg" style={{width:"70%"}}/>
          <h1 className="fs-2">Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg" style={{width:"70%"}}/>
          <h1 className="fs-2">Intraday and F&O trades</h1>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricing0.svg" style={{width:"70%"}}/>
          <h1 className="fs-2">Free direct MF</h1>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
