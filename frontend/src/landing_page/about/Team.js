import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="border-top p-3 mt-5" style={{ lineHeight: "1.8" }}>
        <h1 className="text-center">People</h1>
      </div>
      <div className="row text-muted" style={{ fontSize: "1.2em" }}>
        <div className="col-6 p-3 fs-6 text-center">
            <img src="media/images/pranavBhakare.jpg" style={{borderRadius:"100%", width:"50%"}}/>
            <h4 className="mt-3">Pranav Bhakare</h4>
            <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3 fs-6 mt-5">
          <p>
            Pranav founded LucidTrade to solve a problem every retail trader faces — raw numbers on a screen with no context. Existing platforms show you what happened to your portfolio, but never why. LucidTrade changes that by pairing a full trading platform with AI-powered insights that explain your P&L and stock movements in plain English.          </p>
          <p>
            He built LucidTrade end-to-end — secure authentication, live order management, and two original AI features (portfolio explanations and real-time "why is this stock moving" insights) powered by Google Gemini.          </p>
          <p>
           Playes basketball and Cricket.
          </p>
          <p>
            Connect on <a href="https://www.linkedin.com/in/pranavbhakare/" style={{textDecoration:"none"}}>Linkdin</a> / <a href="https://www.instagram.com/pranavbhakare_110/" style={{textDecoration:"none"}}>Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
