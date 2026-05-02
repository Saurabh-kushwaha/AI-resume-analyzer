import React from "react";
import type { SkillTagProps } from "../types";

const SkillTag: React.FC<SkillTagProps> = ({ name }) => {
  return (
    <span className="bg-danger px-3 py-1 rounded-full text-sm text-white">
      {name}
    </span>
  );
};

export default SkillTag;