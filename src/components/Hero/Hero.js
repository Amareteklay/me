import React from "react"
import { Container, Typography, Button, Box } from "@mui/material"
import CustomBox from "../Containers/CustomBox"
import CustomContainer from "../Containers/CustomContainer"

const Hero = () => {
  return (
    <CustomBox gradientType={"type1"}>
      <CustomContainer backgroundColor={"#07004D"}>
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
          <Button variant="contained" size="large" sx={{backgroundColor: "#902D41"}}  color="#FFC700">
            Explore My Work
          </Button>
        </Box>
      </CustomContainer>
    </CustomBox>
  )
}

export default Hero
