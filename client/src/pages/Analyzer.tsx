// pages/Analyzer.tsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SkillTag from "../components/SkillTag";
import type { AnalysisResult } from "../types";

const Analyzer: React.FC = () => {
  const [result, setResult] = useState<AnalysisResult | null>(null);

  // Mock data (replace with API)
  const handleAnalyze = () => {
    setResult({
      score: 78,
      missing_keywords: ["React Query", "Lazy Loading"],
      strengths: ["Strong UI skills"],
      improvements: ["Add measurable results"],
    });
  };

  return (
    <div className="flex bg-bg min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8 grid grid-cols-2 gap-6">
        
        {/* LEFT */}
        <div className="bg-card p-6 rounded-xl text-white">
          <h2 className="mb-4 font-semibold">Upload Resume</h2>

          <div className="border-2 border-dashed border-gray-600 p-10 text-center">
            Drag & Drop Resume
          </div>

          <button
            onClick={handleAnalyze}
            className="mt-4 bg-primary px-6 py-2 rounded-lg"
          >
            Analyze
          </button>
        </div>

        {/* RIGHT */}
        <div className="bg-card p-6 rounded-xl text-white">
          <h2 className="font-semibold">ATS Score</h2>

          {result && (
            <>
              <div className="text-5xl mt-4 text-primary font-bold">
                {result.score}%
              </div>

              {/* Missing */}
              <div className="mt-6">
                <h3 className="mb-2">Missing Keywords</h3>
                <div className="flex gap-2 flex-wrap">
                  {result.missing_keywords.map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>

              {/* Improvements */}
              <div className="mt-6">
                <h3>Improvements</h3>
                <ul className="list-disc ml-5 mt-2">
                  {result.improvements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Analyzer;