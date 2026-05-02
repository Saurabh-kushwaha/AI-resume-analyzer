// types/index.ts
export interface CardProps {
  title: string;
  value: string;
}

export interface SkillTagProps {
  name: string;
}

export interface AnalysisResult {
  score: number;
  missing_keywords: string[];
  strengths: string[];
  improvements: string[];
}