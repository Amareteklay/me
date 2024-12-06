import React from "react"
import { Box, useTheme } from "@mui/material"

const CustomContainer = ({
  children,
  skewness = "none",
}) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        padding: { xs: "10px", sm: "20px", md: "30px" },
        margin: "0 auto",
        marginTop: "-64px",
        marginBottom: "10px",
        backgroundColor: theme.palette.background.container,
        minHeight: { xs: "400px", sm: "500px", md: "600px" },
        transform: skewness,
        width: "100%",
        borderRadius: "0 0 30px 30px",
        paddingTop: "3px !important",
        overflow: "hidden",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: "18px",
          p: 4,
          my: 4,
          transition: "all 0.3s ease-in-out",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default CustomContainer
