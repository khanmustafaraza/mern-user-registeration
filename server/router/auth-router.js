const express = require("express")
const authController = require("../controllers/auth-controller")

const router =  express.Router()


//  home page route

router.route("/index").get(authController.home)
router.route("/register").post(authController.register)



module.exports =router