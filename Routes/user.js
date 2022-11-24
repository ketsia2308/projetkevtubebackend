const express = require('express');
const { createUser } = require('../Controllers/user');

const userRoutes = express.Router();

userRoutes.post('', createUser);

module.exports = userRoutes