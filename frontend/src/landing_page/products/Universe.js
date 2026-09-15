import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="text-center  mb-3 p-5">
        <p>
          Want to know more about our technology stack? Check out the LucidTrade <a href="https://github.com/PranavB110/LucidTrade" >GitHub</a>.
        </p>
      </div>
      <div className="text-center mb-3">
        <h1 class>The LucidTrade Universe</h1>
        <p className="mt-3">
          Where this project could go next
        </p>
      </div>
      <div className="row text-muted text-center p-5">
        <div className="col-4">
          <img src="media\images\zerodhaFundhouse.png" style={{width:"40%"}}></img>
          <p>
            Our asset management venture <br/>that is creating simple and transparent
            <br/>index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\sensibullLogo.svg" style={{width:"40%"}}></img>
          <p>
            Options trading platform that lets you <br/>create strategies, analyze
            positions, and examine <br/>data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\goldenpiLogo.png" style={{width:"40%"}}></img>
          <p>
            Investment research platform <br/>that offers detailed insights on
            stocks,<br/> sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row text-muted text-center">
        <div className="col-4">
          <img src="media\images\streakLogo.png" style={{width:"35%"}}></img>
          <p>
            Systematic trading platform <br/>that allows you to create and backtest
            <br/>strategies without coding.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\smallcaseLogo.png" style={{width:"40%"}}></img>
          <p>
            Thematic investing platform<br/> that helps you invest in diversified
            <br/>baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\dittoLogo.png" style={{width:"25%"}}></img>
          <p>
            Personalized advice on life<br/> and health insurance. No spam <br/>and no
            mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
