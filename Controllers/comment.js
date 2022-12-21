const Comment = require("../Models/Comment");

const createComment = async (req, res) => {
  const { user_id, video_id, description } = req.body;
  if (!user_id || !video_id || !description)
    return res.status(400).send("Champs requis");
  
  Comment.create({
    user_id,
    video_id,
    description
  }).then((comment) => res.status(201).send(comment))
    .catch((err) => {
        console.log(err)
        res.sendStatus(500);
    })
};

const getComments = async (req, res) => {
    console.log("dhalualiu")
    const comments = await Comment.find()
    res.send(comments);
};

module.exports = { createComment, getComments};
