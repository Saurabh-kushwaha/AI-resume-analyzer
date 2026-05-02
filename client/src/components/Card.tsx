import React from "react";
import type { CardProps } from "../types";

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="bg-card p-6 rounded-xl text-white shadow-lg">
      <p className="text-gray-400">{title}</p>
      <h2 className="text-2xl mt-2 font-semibold">{value}</h2>
    </div>
  );
};

export default Card;