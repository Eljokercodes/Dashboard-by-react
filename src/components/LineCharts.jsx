import { useState } from "react";
import { mockLineData } from "../data/MockData";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";



function LineCharts() {
const chartData = mockLineData[0].data.map((item, index) => ({
  name: item.x,
  japan: mockLineData[0].data[index].y,
  france: mockLineData[1].data[index].y,
  us: mockLineData[2].data[index].y,
}));

const [hoveringDataKey, setHoveringDataKey] = useState();

const handleMouseEnter = (payload) => {
  setHoveringDataKey(payload.dataKey);
};

const handleMouseLeave = () => {
  setHoveringDataKey(undefined);
};

let japanOpacity = 1;
let franceOpacity = 1;
let usOpacity = 1;

if (hoveringDataKey === "japan") {
  franceOpacity = 0.3;
  usOpacity = 0.3;
}

if (hoveringDataKey === "france") {
  japanOpacity = 0.3;
  usOpacity = 0.3;
}

if (hoveringDataKey === "us") {
  japanOpacity = 0.3;
  franceOpacity = 0.3;
}

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={chartData}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />

          <Legend
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />

                <Line
  type="monotone"
  dataKey="japan"
  stroke="#4caf50"
  strokeOpacity={japanOpacity}
  activeDot={{ r: 8 }}
/>

<Line
  type="monotone"
  dataKey="france"
  stroke="#2196f3"
  strokeOpacity={franceOpacity}
/>

<Line
  type="monotone"
  dataKey="us"
  stroke="#f44336"
  strokeOpacity={usOpacity}
/>

          
        </LineChart>
      </ResponsiveContainer>

      <p className="notes">Tips: Hover the legend!</p>
    </div>
  );
}

export default LineCharts;