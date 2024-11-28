import React from "react";
import { Box } from "@mui/material";

const CustomContainer = ({ children, backgroundColor = "#07004D", skewness = "none" }) => {
  return (
    <Box
      sx={{
        padding: "60px", // Consistent inner padding
        margin: "0", // Spacing around the container
        backgroundColor: backgroundColor, // Dynamic background color
        minHeight: "600px",
        boxShadow: "0px 15px 30px rgba(94, 43, 255, 0.5), 0px 0px 25px rgba(255, 255, 255, 0.5)", // Strong shadow
        transform: skewness, // Skewness passed dynamically
      }}
    >
      {children}
    </Box>
  );
};

export default CustomContainer;
