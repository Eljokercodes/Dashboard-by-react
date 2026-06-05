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

function BarChart({ isDashboard = false }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        data={mockBarData}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 20,
        }}
      >
        <CartesianGrid stroke={colors.grey[700]} />

        <XAxis
          dataKey="country"
          stroke={colors.grey[100]}
          tick={{ fontSize: 12 }}
        />

        <YAxis
          stroke={colors.grey[100]}
          tick={{ fontSize: 12 }}
        />

        <Tooltip />

        {!isDashboard && <Legend />}

        <Area
          type="monotone"
          dataKey="hot dog"
          fill={colors.blueAccent[400]}
          stroke={colors.blueAccent[400]}
        />

        <Bar
          dataKey="burger"
          fill={colors.greenAccent[500]}
        />

        <Line
          type="monotone"
          dataKey="kebab"
          stroke={colors.redAccent?.[500] || "#ff7300"}
          strokeWidth={2}
        />

        <Bar
          dataKey="donut"
          fill={colors.purpleAccent?.[400] || "#8884d8"}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default BarChart;