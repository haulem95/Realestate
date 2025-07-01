import express from "express";
import { login, logout, register } from "../controllers/auth.controller";

const router = express.Router()

router.get("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;