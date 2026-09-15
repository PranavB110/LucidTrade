import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mb-5">
        <h1 className="fs-2 text-center">
          We're building trading platforms that actually explain themselves.
          <br />
          Now, we're doing it with AI.
        </h1>
      </div>
      <div
        className="row p-5 border-top mt-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 fs-6">
          <p>
            We started building LucidTrade with a simple goal — traders don't
            just need a place to execute orders, they need to actually
            understand what's happening to their money. We named it LucidTrade
            because "lucid" means clear, and that's exactly what most trading
            platforms fail to give you: clarity.
          </p>
          <p>
            Using AI, LucidTrade explains your portfolio performance and stock
            price movements in plain English, backed by real market data — not
            just raw numbers you're left to interpret alone.
          </p>
          <p>
            A personal project demonstrating full-stack development and AI
            integration in fintech.
          </p>
        </div>
        <div className="col-6 p-5 fs-6">
          <p>
            In addition to building the platform, this project explores how AI
            can make retail trading genuinely more transparent — not just faster
            or cheaper.
          </p>
          <p>
            The two AI features — portfolio explanations and real-time stock
            insights — were built to test a simple idea: traders shouldn't have
            to leave the app to understand their own money.
          </p>
          <p>
            There's more to build here. Check the :-
              <a href="https://github.com/PranavB110/LucidTrade" style={{ textDecoration: "none" }}>
              GitHub
            </a>
            - repo for the latest
            updates, or see the README for the full technical breakdown of how
            it all works.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
