import Blog from "../models/blogModels/blog.js";
import Comment from "../models/blogModels/comment.js";

export const getArticleList = (req, res) => {
  const filter = req.query;

  if (Object.keys(req.query).length === 0) {
    Blog.find({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    Blog.find({ "meta.category": filter.category })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const getArticleData = (req, res) => {
  Blog.find({ blogId: req.params.slug })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getComment = (req, res) => {
  Comment.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const likeArticle = (req, res) => {
  Blog.findByIdAndUpdate(
    req.body.id,
    { "meta.likes": req.body.likes },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

export const submitComment = async (req, res) => {
  const blogId = req.body.blog;
  const author = req.body.author;
  const email = req.body.email;
  const body = req.body.comment;

  const comment = new Comment({
    blog: blogId,
    author: author,
    email: email,
    body: body,
    likes: 0,
  });
  await comment.save(function (err) {
    if (err) {
      console.log(err);
      return handleError(err);
    } else {
      console.log("posted");
    }
  });
  const relatedBlog = await Blog.findById(blogId);
  console.log("slug");
  console.log(relatedBlog.meta.slug);
  relatedBlog.comments.push(comment._id);
  await relatedBlog.save(function (err) {
    if (err) {
      console.log(err);
      return handleError(err);
    } else {
      res.send();
      console.log("posted");
    }
  });
};

export const likeComment = async (req, res) => {
  console.log(req.body);
  const comment = await Comment.findById(req.body.comment);
  comment.likes = comment.likes + 1;
  await comment.save(function (err) {
    if (err) {
      console.log(err);
      return handleError(err);
    } else {
      res.send();
      console.log("liked");
    }
  });
};
