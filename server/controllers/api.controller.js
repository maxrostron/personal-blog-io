import Blog from "../models/blog.js";

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
  Blog.findById(req.params.slug)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
