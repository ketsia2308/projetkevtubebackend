const express = require("express");
const {createComment, getComments} = require('../Controllers/comment')

const commentRouter = express.Router();

commentRouter.get("", getComments);
commentRouter.post("/create", createComment);

module.exports = commentRouter;