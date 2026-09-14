import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="border-top p-3 mt-5" style={{ lineHeight: "1.8" }}>
        <h1 className="text-center">People</h1>
      </div>
      <div className="row text-muted" style={{ fontSize: "1.2em" }}>
        <div className="col-6 p-3 fs-6 text-center">
            <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%", width:"50%"}}/>
            <h4 className="mt-3">Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3 fs-6 mt-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
           Playing basketball is his zen.
          </p>
          <p>
            Connect on <a href="" style={{textDecoration:"none"}}>Linkdin</a> / <a href="" style={{textDecoration:"none"}}>Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
