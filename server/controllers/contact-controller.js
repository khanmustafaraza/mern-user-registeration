const Contact = require("../models/contact-model");

const contact = async(req,res)=>{
    const response = req.body;
    const  contactObj = new Contact(response);
    const savedContact = await contactObj.save();
    if(savedContact){
        return res.status(200).json({
            msg:"We Shortly get In Touch With You"
        })
    }
}

module.exports = contact