const express = require("express");
const usersController = require("./src/controller/userController");
const { register, login } = require("./src/controller/authController");

const app = express();
app.use(express.json());

app.use("/users", usersController);

app.post("/register", register);

app.post("/login", login);

module.exports = app;
