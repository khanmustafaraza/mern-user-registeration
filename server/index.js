require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const userRouter = require("./router/user-router");

const connectDB = require("./utlis/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());
// todo use cors midddleware to resolve cors issue
app.use(cors());

//  * handle route at the time of hosting on server
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to the home page</h1>");
});

// todo auth middleware
app.use("/api/auth", authRouter);
// todo contact middleware router
app.use("/api/contact", contactRouter);
// todo all user middleware router
app.use("/api/users", userRouter);

// ? handle custom middleware for error handling
app.use(errorMiddleware);

// todo >>>>>>>>>>>>>>> server instance >>>>>>>>>>>>>>>>>>>>>>>>>>>

const PORT = 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
