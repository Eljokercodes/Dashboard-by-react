

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useTheme } from "@mui/material/styles";
import { tokens } from "../Theme";
import { mockBarData } from "../data/MockData";

function BarChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={mockBarData}>
          <CartesianGrid stroke={colors.grey[700]} />

          <XAxis dataKey="country" stroke={colors.grey[100]} />
          <YAxis stroke={colors.grey[100]} />

          <Tooltip />
          <Legend />

          <Area
            type="monotone"
            dataKey="hot dog"
            fill={colors.blueAccent[400]}
            stroke={colors.blueAccent[400]}
          />

          <Bar dataKey="burger" fill={colors.greenAccent[500]} />

          <Line
            type="monotone"
            dataKey="kebab"
            stroke={colors.redAccent?.[500] || "#ff7300"}
          />

          <Bar dataKey="donut" fill={colors.purpleAccent?.[400] || "#8884d8"} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChart;












