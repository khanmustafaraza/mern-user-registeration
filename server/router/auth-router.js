const express = require("express");
const authController = require("../controllers/auth-controller");

const router = express.Router();
const validate = require("../middlewares/validate-middleware");
const verifyToken = require("../middlewares/token-middleware");
const registerSchema = require("../validators/auth-validators");

//  home page route

router.route("/index").get(authController.home);
router.post("/register", validate(registerSchema), authController.register);
router.route("/login").post(authController.login);
router.get("/verify-token", verifyToken, authController.userData);

module.exports = router;
