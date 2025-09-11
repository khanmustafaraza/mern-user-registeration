const mongoose = require("mongoose")

const URI = "mongodb://127.0.0.1:27017/mern-app"


const connectDB = async() =>{
    try {
        await mongoose.connect(URI)
        console.log("connection is successfully")
        
    } catch (error) {
        console.error()
        process.exit(0)
    }
}
module.exports = connectDB