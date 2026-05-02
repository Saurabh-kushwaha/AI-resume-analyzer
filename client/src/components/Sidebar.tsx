import React from "react";

const menuItems: string[] = [
  "Dashboard",
  "Analyze",
  "History",
  "Pricing",
  "Profile",
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-60 h-screen bg-card p-5">
      <h1 className="text-white text-xl mb-8 font-semibold">AI Resume</h1>

      {menuItems.map((item) => (
        <div
          key={item}
          className="text-gray-400 hover:bg-primary hover:text-white p-3 rounded-lg cursor-pointer mb-2 transition"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;