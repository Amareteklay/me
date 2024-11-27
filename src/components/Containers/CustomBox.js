import React from "react"
import { Box } from "@mui/material"

const CustomBox = ({ children, gradientType, id, borderRadius = "18px" }) => {
  // Define gradient options
  const gradients = {
    type1:
      "linear-gradient(130deg, #ff7a18 0%, #af002d 41.07%, #319197 76.05%)",
    type2:
      "linear-gradient(130deg, #319197 0%, #af002d 41.07%, #ff7a18 76.05%)",
  }

  return (
    <Box
      id={id}
      sx={{
        background: gradients[gradientType] || "rgba(255, 255, 255, 0.1)",
        padding: "4px", // Symmetrical padding
        paddingBottom: "0",
        paddingTop: "0",
        borderRadius: borderRadius,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "10px 0", // Symmetrical margin
        display: "flex", // Flexbox for centering
        justifyContent: "center", // Center horizontally
      }}
    >
      {children}
    </Box>
  )
}

export default CustomBox
