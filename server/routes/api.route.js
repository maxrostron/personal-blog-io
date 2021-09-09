import express from "express";
import { renderHome } from "../controllers/api.controller.js";

const router = express.Router();

router.get("/blog/:name", renderHome);

export default router;
