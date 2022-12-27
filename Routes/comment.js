const express = require("express");
const {createComment, getComments, getVideoComments,like} = require('../Controllers/comment')

const commentRouter = express.Router();

commentRouter.get("", getComments);
commentRouter.post("/create", createComment);
commentRouter.get("/:video_id", getVideoComments);
commentRouter.put("/like", like);

module.exports = commentRouter;