import fs, { readFile } from "fs";
import Blog from "../models/blog.js";

export const renderHome = (req, res) => {
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
