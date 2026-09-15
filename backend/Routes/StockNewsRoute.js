const { ExplainStockMovement } = require("../Controllers/StockNewsController");
const { userVerification } = require("../Middlewears/AuthMiddleware");
const router = require("express").Router();

router.get("/explainStock/:stockName", userVerification, ExplainStockMovement);

module.exports = router;