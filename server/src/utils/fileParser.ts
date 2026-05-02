// src/utils/fileParser.ts
import pdfParse from "pdf-parse";
import mammoth from "mammoth";

export const parseFile = async (file: Express.Multer.File): Promise<string> => {
  if (!file || !file.buffer) {
    throw new Error("No file buffer provided");
  }

  try {
    if (file.mimetype === "application/pdf") {
      const data = await pdfParse(file.buffer);
      if (!data.text) throw new Error("No text extracted from PDF");
      return data.text;
    }

    if (
      file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.mimetype === "application/msword"
    ) {
      const result = await mammoth.extractRawText({
        buffer: file.buffer,
      });
      if (!result.value) throw new Error("No text extracted from document");
      return result.value;
    }

    throw new Error(`Unsupported file format: ${file.mimetype}`);
  } catch (error) {
    throw new Error(`File parsing failed: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
};