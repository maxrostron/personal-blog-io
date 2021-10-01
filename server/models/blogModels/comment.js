import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
  postedAt: { type: Date, default: Date.now },
  likes: { type: Number },
  blog: { type: Schema.Types.ObjectId, ref: "Blog" },
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
