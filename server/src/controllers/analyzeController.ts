// src/controllers/analyzeController.ts
import { Request, Response } from "express";
import { parseFile } from "../utils/fileParser";
import { analyzeResume } from "../services/analyzeService";

export const analyzeController = async (
  req: Request,
  res: Response
) => {
  try {
    const file = req.file;
    const { jdText } = req.body;

    if (!file || !jdText) {
      return res.status(400).json({ error: "Missing data" });
    }

    const resumeText = await parseFile(file);

    const result = await analyzeResume(resumeText, jdText);

    res.json({ success: true, data: result });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};