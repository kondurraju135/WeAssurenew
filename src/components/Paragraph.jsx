import { Typography } from "@mui/material";
import React from "react";

const Paragraph = ({ text, maxWidth, mx, textAlign, color }) => {
  return (
    <Typography
      sx={{
        maxWidth: maxWidth,
        mx: mx,
        textAlign: textAlign,
        py: 3,
        color: color || "#383838",
      }}
    >
      {text}
    </Typography>
  );
};

export default Paragraph;
