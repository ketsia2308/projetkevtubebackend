const mongoose = require("mongoose");

const CommentModel = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    video_id:{
      type: String,
      required : true
    },

    sub_comments: [
      {
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        date: Date,
        description: String,
      }
    ],

    likes: [
        {
            user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        }
    ],

    dislikes: [
        {
            user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        }
    ]

  },

  {
    timestamps: true,
  }
);

const Comment = mongoose.model("comment", CommentModel);

module.exports= Comment;