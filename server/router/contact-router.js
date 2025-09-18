const express = require("express");
const contact = require("../controllers/contact-controller");

const router = express.Router();

router.route("/create-new-contact").post(contact.createContact);
router.route("/get-all-contact").get(contact.getAllContacts);

module.exports = router;
