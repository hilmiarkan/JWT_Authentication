require("dotenv").config();

const express = require("express");
const app = express();
const userRouter= require("./api/users/user_router");
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("app running on port " + process.env.APP_PORT);
})