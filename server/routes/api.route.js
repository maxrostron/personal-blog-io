import express from "express";
import { renderHome } from "../controllers/api.controller.js";

const router = express.Router();

router.get("/", renderHome);

export default router;
