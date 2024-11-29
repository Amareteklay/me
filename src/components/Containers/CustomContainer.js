import React from "react";
import { Box } from "@mui/material";

const CustomContainer = ({ children, backgroundColor = "#262626", skewness = "none" }) => {
  return (
    <Box
      sx={{
        padding: { xs: "10px", sm: "20px", md: "30px" }, // Responsive padding
        margin: "0 auto", // Center the container
        marginBottom: "10px",
        backgroundColor: backgroundColor, // Dynamic background color
        minHeight: { xs: "400px", sm: "500px", md: "600px" }, // Responsive minimum height
        boxShadow: {
          xs: "0px 5px 15px rgba(94, 43, 255, 0.3)", // Lighter shadow for smaller screens
          sm: "0px 10px 20px rgba(94, 43, 255, 0.4)",
          md: "0px 15px 30px rgba(94, 43, 255, 0.5), 0px 0px 25px rgba(255, 255, 255, 0.5)", // Full shadow for larger screens
        },
        transform: skewness, // Skewness passed dynamically
        width:"100%", // Responsive width
        borderRadius: "0 0 30px 30px", // Rounded corners for a modern look
        //borderTop: "20px #00171F solid",
        paddingTop: "3px !important",
        overflow: "hidden", // Ensure content doesn't spill
      }}
    >
      {children}
    </Box>
  );
};

export default CustomContainer;
