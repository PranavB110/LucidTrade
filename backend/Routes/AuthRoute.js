const { Signup, Login, CheckAuth } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewears/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/checkAuth", userVerification, CheckAuth);

module.exports = router;