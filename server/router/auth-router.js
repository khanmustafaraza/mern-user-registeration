const express = require("express");
const authController = require("../controllers/auth-controller");

const router = express.Router();
const validate = require("../middlewares/validate-middleware");
const registerSchema = require("../validators/auth-validators");

//  home page route

router.route("/index").get(authController.home);
router
  .route("/register")
  .post(validate(registerSchema), authController.register);

module.exports = router;
