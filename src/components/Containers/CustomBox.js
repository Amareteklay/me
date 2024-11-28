import React from "react";
import { Box } from "@mui/material";

const CustomBox = ({ children, gradientType, id, borderRadius = "0" }) => {
  // Define gradient options
  const gradients = {
    type1:
      "skew(0deg)",
    type2:
      "skew(0deg)",
  };

  return (
    <Box
      id={id}
      sx={{
        position: "relative", // Ensure relative positioning for pseudo-elements
        borderRadius: borderRadius,
        padding: "1px", // Adjust padding for inner content
        paddingTop: "1px",
        paddingBottom: "1px",
        transform: gradients[gradientType],
        minHeight: "600px",
        margin: "10px",
        marginLeft: "30px",
        marginRight: "30px",
        display: "flex", // Flexbox for centering
        justifyContent: "center", // Center horizontally
       background: "#5E2BFF", // Set the background to white
        boxSizing: "border-box", // Include border in sizing
        "&::before": {
          content: '""', // Empty content for pseudo-element
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1, // Place behind the main content
        borderRadius: borderRadius, // Match border-radius
          padding: "1px", // Adjust padding to control border thickness
          WebkitMask: "content-box", // Mask to create border effect
          mask: "content-box", // Mask for non-WebKit browsers
        },
      }}
    >
      {children}
    </Box>
  );
};

export default CustomBox;
