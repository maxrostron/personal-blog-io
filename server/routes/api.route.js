import express from "express";
import {
  getArticleList,
  getArticleData,
  getComment,
  likeArticle,
  submitComment,
  likeComment,
} from "../controllers/api.controller.js";

const router = express.Router();

router.get("/blog", getArticleList);
router.get("/blog/:slug", getArticleData);
router.get("/blog/comment/:id", getComment);
router.post("/blog/like", likeArticle);
router.post("/blog/submitcomment", submitComment);
router.post("/blog/likecomment", likeComment);

export default router;
