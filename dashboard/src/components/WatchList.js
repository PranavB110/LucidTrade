import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  InfoOutlined,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  const [explainOpen, setExplainOpen] = useState(false);
  const [explainLoading, setExplainLoading] = useState(false);
  const [explainText, setExplainText] = useState("");
  const [explainError, setExplainError] = useState("");

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  const handleExplainClick = () => {
    setExplainOpen(true);
    setExplainLoading(true);
    setExplainError("");
    setExplainText("");

    axios
      .get(`http://localhost:3002/explainStock/${stock.name}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          setExplainText(res.data.explanation);
        } else {
          setExplainError(res.data.message || "Could not fetch insights.");
        }
      })
      .catch((err) => {
        console.error(err);
        setExplainError("Something went wrong while fetching insights.");
      })
      .finally(() => {
        setExplainLoading(false);
      });
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && (
        <WatchListActions uid={stock.name} onExplainClick={handleExplainClick} />
      )}

      {explainOpen && (
        <div
          style={{
            margin: "8px 0",
            padding: "12px",
            backgroundColor: "#f5f8fb",
            borderRadius: "6px",
            fontSize: "13px",
            lineHeight: "1.5",
            color: "#333",
            position: "relative",
          }}
        >
          <button
            onClick={() => setExplainOpen(false)}
            style={{
              position: "absolute",
              top: "6px",
              right: "8px",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: "14px",
              color: "#888",
            }}
          >
            ✕
          </button>
          {explainLoading && <p>Analyzing recent news for {stock.name}...</p>}
          {explainError && <p style={{ color: "#e63946" }}>{explainError}</p>}
          {explainText && <p>{explainText}</p>}
        </div>
      )}
    </li>
  );
};

const WatchListActions = ({ uid, onExplainClick }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Why is this moving?"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={onExplainClick}
        >
          <button className="action">
            <InfoOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};