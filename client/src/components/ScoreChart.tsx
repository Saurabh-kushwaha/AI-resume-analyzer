// components/ScoreChart.tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface Data {
  name: string;
  score: number;
}

const data: Data[] = [
  { name: "Day 1", score: 50 },
  { name: "Day 2", score: 65 },
  { name: "Day 3", score: 78 },
];

export default function ScoreChart() {
  return (
    <LineChart width={400} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="score" />
    </LineChart>
  );
}