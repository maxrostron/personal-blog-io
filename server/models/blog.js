import mongoose from "mongoose";
const Schema = mongoose.Schema;

// const commentSchema = new Schema({
//   number: Number,
//   name: String,
//   email: String,
//   comment: String,
//   postedAt: Date,
//   relatedBlog: { type: Schema.Types.ObjectId, ref: "Blog" },
// });

const blogSchema = new Schema({
  _id: String,
  mdx: String,
  meta: {
    isPublished: Boolean,
    publishedOn: Date,
    category: String,
    title: String,
    slug: String,
    seoTitle: String,
    abstract: String,
    author: String,
    likes: Number,
  },
  comments: [
    {
      number: Number,
      name: String,
      email: String,
      comment: String,
      postedAt: Date,
    },
  ],
  // comments: [{ type: Schema.Types.ObjectID, ref: "Comment" }],
});

// const Comment = mongoose.model("Comment", commentSchema);
const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
