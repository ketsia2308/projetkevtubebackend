const express = require('express');

const useRoutes = express.Router();

useRoutes.post('', createUser());

module.exports = useRoutes