import React from "react"
import { Container, Typography, Button, Box } from "@mui/material"

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(to right, #1a73e8, #ff9800)",
        color: "#fff",
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Showcasing expertise, insights, and creative projects.
        </Typography>
        <Button variant="contained" size="large" color="secondary">
          Explore My Work
        </Button>
      </Container>
    </Box>
  )
}

export default Hero
