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

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to the home page</h1>");
});

// todo all middleware
app.use("/api/auth", authRouter);
app.use("/api/contact", contactRouter);
app.use("/api/users", userRouter);

app.use(errorMiddleware);

// todo >>>>>>>>>>>>>>> server instance >>>>>>>>>>>>>>>>>>>>>>>>>>>

const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});
