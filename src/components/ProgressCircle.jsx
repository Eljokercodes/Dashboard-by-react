import { useTheme } from "@emotion/react";
import { tokens } from "../Theme";
import { Box } from "@mui/material";

function ProgressCircle({ progress = 0.75, size = 40 }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const angle = progress * 360;

  return (
    <Box
      sx={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        flexShrink: 0, // 🔥 مهم جدًا
        background: `
          radial-gradient(${colors.primary[400]} 55%, transparent 56%),
          conic-gradient(
            ${colors.greenAccent[500]} 0deg ${angle}deg,
            ${colors.blueAccent[500]} ${angle}deg 360deg
          )
        `,
      }}
    />
  );
}

export default ProgressCircle;