import React from "react"
import { Container, Typography, Button, Box } from "@mui/material"
import CustomBox from "../Containers/CustomBox"
import CustomContainer from "../Containers/CustomContainer"

const Hero = () => {
  return (
    
      <CustomContainer backgroundColor={"#262626"} skewness={"skew(0deg)"}>
        <Container sx={{
    backgroundColor: "#00171F", // Dark background
    p: 4, // Padding
    //borderTop: "10px #5E2BFF solid", // Highlighted border
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.5), 0px 5px 10px rgba(30, 252, 30, 1)", // Strong shadow// Bright shadow
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
    borderRadius: "18px",
    "&:hover": {
      transform: "scale(1.05)", // Slightly enlarge on hover
      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(30, 252, 30, 0.9)", 
    },
  }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", mb: 2, textAlign: "center", mt: 4 }}
        >
          Welcome
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, textAlign: "center" }}>
          Showcasing expertise, insights, and creative projects.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 8,
          }}
        >
          <Button variant="contained" size="large" sx={{backgroundColor: "#C42847", color: "#fff !important"}}  >
            Explore My Work
          </Button>
        </Box>
        </Container>
      </CustomContainer>
  )
}

export default Hero
