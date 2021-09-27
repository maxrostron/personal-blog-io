import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  blogId: String,
  meta: {
    isPublished: Boolean,
    publishedOnDay: String,
    publishedOnMonth: String,
    publishedOnYear: String,
    date: Date,
    category: String,
    title: String,
    route: String,
    componentName: String,
    slug: String,
    seoTitle: String,
    abstract: String,
    author: String,
    likes: Number,
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
