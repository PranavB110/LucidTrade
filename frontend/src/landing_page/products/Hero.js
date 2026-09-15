import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="text-center mt-5 p-3 mb-5">
        <h1>LucidTrade Products</h1>
        <h3 className="text-muted mt-3 fs-4">Trading platforms built around clarity, not just charts</h3>
        <p className='mt-3'>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            AI-powered offerings <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
