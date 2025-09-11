const User = require("../models/user-model");

const home = async (req,res)=>{
    try {
        res.status(200).send(`this is index page`)
    } catch (error) {
        console.log(error)
    }
}

const register = async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({
                msg:"User Alreday Exsist"
            })
        }
         const userObj = new User({
            username,
            email,
            password
        });

        const savedUser = await userObj.save(); // <- fix here
    //     const userObj ={
    //         username,
    //         email,password
    //     }
    //   const savedUser = await User.create(userObj)
    
      if(savedUser){
         res.status(200).json({
            msg:"Account Created Successfully"
         })
      }
       
    } catch (error) {
        console.log(error)
    }
}


module.exports ={home,register}