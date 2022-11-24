const express = require('express');
const { createUser } = require('../Controllers/user');
const { checkUserFileds } = require('../Middlewares/user');

const userRoutes = express.Router();

userRoutes.post('',checkUserFileds, createUser);

module.exports = userRoutes