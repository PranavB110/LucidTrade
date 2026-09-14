require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");
const { userVerification } = require("./Middlewears/AuthMiddleware");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(
  cors({
    origin: ["http://localhost:3000","http://localhost:3001", "http://localhost:3003"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// Auth routes
app.use("/", authRoute);

// Holdings routes
app.get("/allHoldings", userVerification, async (req, res) => {
  const holdings = await HoldingsModel.find({});
  res.json(holdings);
});

app.get("/allPositions", userVerification, async (req, res) => {
  const positions = await PositionsModel.find({});
  res.json(positions);
});

app.get("/allOrders", userVerification, async (req, res) => {
  const orders = await OrdersModel.find({ user: req.user._id }).sort({ _id: -1 });
  res.json(orders);
});

app.post("/newOrder", userVerification, async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    user: req.user._id,
  });

  await newOrder.save();

  res.send("Order Saved");
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));