const Contact = require("../models/contact-model");

const createContact = async (req, res) => {
  const response = req.body;
  const contactObj = new Contact(response);
  const savedContact = await contactObj.save();
  if (savedContact) {
    return res.status(200).json({
      success: true,
      msg: "We Shortly get In Touch With You",
    });
  }
};
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({});
    console.log(contacts);

    if (!contacts || contacts.length === 0) {
      // just pass a plain object as error
      return next({
        message: "No contacts found in database",
        statusCode: 404,
      });
    }

    res.status(200).json({
      success: true,
      contacts,
    });
  } catch (error) {
    // pass actual error with custom message
    next({ message: "Failed to fetch users", statusCode: 500 });
  }
};

module.exports = { getAllContacts, createContact };
