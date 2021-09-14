import express from "express";
import {
  getArticleList,
  getArticleData,
} from "../controllers/api.controller.js";

const router = express.Router();

router.get("/blog", getArticleList);
router.get("/blog/:slug", getArticleData);

export default router;
