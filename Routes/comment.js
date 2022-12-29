const express = require("express");
const {createComment, getComments, getVideoComments,like, dislike} = require('../Controllers/comment')

const commentRouter = express.Router();

commentRouter.get("", getComments);
commentRouter.post("/create", createComment);
commentRouter.get("/:video_id", getVideoComments);
commentRouter.put("/like", like);
commentRouter.put("/dislike", dislike);

module.exports = commentRouter;