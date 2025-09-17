const express = require("express");
const { getAllUser, getUser } = require("../controllers/user-controller");
const router = express.Router();

router.get("/get-all-user", getAllUser);
router.get("/get-user/:id", getUser);

module.exports = router;
