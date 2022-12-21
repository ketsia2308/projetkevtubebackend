const express = require("express");
const {createComment} = require('../Controllers/comment')

const commentRouter = express.Router();

commentRouter.get("", (req, res) => res.send("Cendrillon"));
commentRouter.post("/create", createComment);

module.exports = commentRouter;