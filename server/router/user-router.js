const express = require("express");
const {
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user-controller");
const router = express.Router();

router.get("/get-all-user", getAllUser);
router.get("/get-user/:id", getUser);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

module.exports = router;
