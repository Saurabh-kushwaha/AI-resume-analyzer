// src/routes/analyzeRoutes.ts
import express from "express";
import multer from "multer";
import { analyzeController } from "../controllers/analyzeController";

const router = express.Router();
const upload = multer();

router.post("/analyze", upload.single("resume"), analyzeController);

export default router;