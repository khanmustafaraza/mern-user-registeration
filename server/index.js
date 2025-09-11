require("dotenv").config()
const express = require("express");

const app = express();

const  authrouter = require("./router/auth-router");
const connectDB = require("./utlis/db");

app.use(express.json())

app.get("/",(resq,res)=>{
    res.status(200).send("<h1>Welcome to the home page</h1>")
})

// todo all middleware 
app.use("/api/auth",authrouter)












// creating the sever

const PORT =5000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
});
})