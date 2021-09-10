import Blog from "../models/blog.js";

export const getArticleList = (req, res) => {
  let blogDirectory = undefined;

  if (req.params.name === "updates") {
    blogDirectory = "Personal Update";
  } else if (req.params.name === "essays") {
    blogDirectory = "Living Essay";
  } else {
    blogDirectory = undefined;
  }

  Blog.find({ "meta.category": `${blogDirectory}` })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticleData = (req, res) => {
  Blog.findById(req.params.article)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
