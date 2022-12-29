const Comment = require("../Models/Comment");

const createComment = async (req, res) => {
  const { user_id, video_id, description } = req.body;
  if (!user_id || !video_id || !description)
    return res.status(400).send("Champs requis");

  Comment.create({
    user_id,
    video_id,
    description,
  })
    .then((comment) => res.status(201).send(comment))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

const getComments = async (req, res) => {
  console.log("dhalualiu");
  const comments = await Comment.find();
  res.send(comments);
};

const getVideoComments = async (req, res) => {
  const { video_id } = req.params;
  const comments = await Comment.find({ video_id: video_id }).populate({
    path: "user_id",
  });
  res.send(comments);
};

const like = async (req, res) => {
  const { user_id, comment_id } = req.body;
  if (!user_id || !comment_id) {
    return res.sendStatus(300);
  }
  await Comment.updateOne({ _id: comment_id }, { $push: { likes: user_id}  });
  res.sendStatus(204);
};

const dislike = async (req, res) => {
  const {user_id, comment_id} = req.body;
  if (!user_id || !comment_id) {
    return res.sendStatus(300);
  }
  await Comment.updateOne({_id: comment_id}, { $push: { dislikes: user_id}});
  res.sendStatus(204);
}

module.exports = { createComment, getComments, getVideoComments, like, dislike};
