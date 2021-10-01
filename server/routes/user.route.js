import express from "express";
import {
  signup,
  verifyEmail,
  resendLink,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/verification/:email/:token", verifyEmail);
router.post("/verification/resend", resendLink);

export default router;
