import express from "express";
import {
  getArticleList,
  getArticleData,
  getComment,
  likeArticle,
  submitComment,
  likeComment,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getArticleList);
router.get("/:slug", getArticleData);
router.get("/comment/:id", getComment);
router.post("/like", likeArticle);
router.post("/submitcomment", submitComment);
router.post("/likecomment", likeComment);

export default router;
