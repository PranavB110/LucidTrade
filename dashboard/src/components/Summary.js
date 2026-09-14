import React, { useState } from "react";
import axios from "axios";

const Summary = () => {
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleExplainClick = () => {
    setLoading(true);
    setError("");
    setExplanation("");

    axios
      .get("http://localhost:3002/explainPortfolio", { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          setExplanation(res.data.explanation);
        } else {
          setError(res.data.message || "Could not generate insights.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Something went wrong while generating insights.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section" style={{ padding: "16px" }}>
        <span>
          <p>AI Portfolio Insights</p>
        </span>

        <button
          onClick={handleExplainClick}
          disabled={loading}
          style={{
            marginTop: "10px",
            padding: "10px 18px",
            backgroundColor: "#387ed1",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "14px",
          }}
        >
          {loading ? "Analyzing your portfolio..." : "Explain my portfolio"}
        </button>

        {error && (
          <p style={{ color: "#e63946", marginTop: "12px" }}>{error}</p>
        )}

        {explanation && (
          <div
            style={{
              marginTop: "16px",
              padding: "16px",
              backgroundColor: "#f5f8fb",
              borderRadius: "6px",
              lineHeight: "1.6",
              fontSize: "14px",
              color: "#333",
            }}
          >
            {explanation}
          </div>
        )}
      </div>
    </>
  );
};

export default Summary;