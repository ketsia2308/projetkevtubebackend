const express = require('express');
const { createUser, getUser } = require('../Controllers/user');
const { checkUserFileds } = require('../Middlewares/user');

const userRoutes = express.Router();

userRoutes.get("", (req, res) => res.send("users"));
userRoutes.get("/:email", getUser);
userRoutes.post("/create", createUser);


module.exports = userRoutes