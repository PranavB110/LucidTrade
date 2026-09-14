const { ExplainPortfolio } = require("../Controllers/InsightsController");
const { userVerification } = require("../Middlewears/AuthMiddleware");
const router = require("express").Router();

router.get("/explainPortfolio", userVerification, ExplainPortfolio);

module.exports = router;