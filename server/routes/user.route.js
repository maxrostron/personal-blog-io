import express from "express";
import {
  signup,
  verifyEmail,
  resendLink,
  initiateUnsubscribe,
  removeUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/verification/:email/:token", verifyEmail);
router.post("/verification/resend", resendLink);
router.post("/unsubscribe", initiateUnsubscribe);
router.get("/unsubscribe/:email/:token", removeUser);

export default router;
