require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/userRoutes");
const connectDb = require("./models");
const app = express();

connectDb();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", userRouter);

app.listen(process.env.PORT, () =>
  console.log(`server running ${process.env.PORT}`)
);
