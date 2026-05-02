// pages/Dashboard.tsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const Dashboard: React.FC = () => {
  return (
    <div className="flex bg-bg min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-white text-2xl mb-6 font-semibold">
          Dashboard
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">
          <Card title="ATS Score" value="78%" />
          <Card title="Strength" value="Strong" />
          <Card title="Missing Skills" value="12" />
        </div>

        {/* Insight */}
        <div className="bg-card p-6 mt-6 rounded-xl text-white">
          💡 Your resume lacks performance optimization keywords.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;