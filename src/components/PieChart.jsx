import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Box, useTheme } from "@mui/material";
import { tokens } from "../Theme";

const data = [
  { name: "Power", value: 400 },
  { name: "Speed", value: 300 },
  { name: "Magic", value: 300 },
  { name: "Defense", value: 200 },
];

const COLORS = ["#00f5ff", "#ff4dff", "#ffe600", "#00ff88"];

function PieWithAnimeStyle() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh", // 👈 كبرنا الحجم
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle at top, #1a1a2e, #0f0f1a)",
        borderRadius: "20px",
        boxShadow: "0 0 40px rgba(0,255,255,0.2)",
        overflow: "hidden",
      }}
    >
      <ResponsiveContainer>
        <PieChart>

          <Tooltip />

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={170}   //  كبير جدًا
            innerRadius={70}    //  donut style
            paddingAngle={5}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
                style={{
                  filter: "drop-shadow(0px 0px 10px rgba(0,255,255,0.5))",
                  transition: "all 0.3s linear",
                }}
              />
            ))}
          </Pie>

        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default PieWithAnimeStyle;