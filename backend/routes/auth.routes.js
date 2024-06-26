import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import upload from "../utils/uploadService.js";

const router = express.Router();

router.post("/signup", upload.single("profileImage"), signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
