import express from "express";
import {
  getArticleList,
  getArticleData,
} from "../controllers/api.controller.js";

const router = express.Router();

router.get("/blog/:name", getArticleList);
router.get("/blog/:name/:article", getArticleData);

export default router;
