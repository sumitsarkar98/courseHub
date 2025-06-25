import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  signup,
  login,
  userProfile,
  logout,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", signup);
router.post("/login", login);
router.post("/profile", authMiddleware, userProfile);
router.post("/logout", authMiddleware, logout);

export default router;
