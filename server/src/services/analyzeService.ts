// src/services/analyzeService.ts
import { openai } from "../config/openai";

export const analyzeResume = async (
  resumeText: string,
  jdText: string
) => {
  const prompt = `
You are an ATS system.

Analyze the resume against job description.

Return JSON:
{
  "score": number,
  "missing_keywords": [],
  "strengths": [],
  "improvements": []
}

Resume:
${resumeText}

Job Description:
${jdText}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
};