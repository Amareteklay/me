import React from "react";
import { Typography, Button, Box } from "@mui/material";

const Hero = () => {
  return (
      <Box
        sx={{
          backgroundColor: "#00171F", // Dark background
          p: { xs: 2, sm: 4 }, // Padding adjusts for small screens
          boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.5), 0px 5px 10px rgba(30, 252, 30, 1)", // Strong shadow
          transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
          borderRadius: "0 0 18px 18px",
          //borderTop: "5px #1EFC1E solid",
          width: "100%", // Dynamically adjust width
          minHeight: "80vh",
          margin: "0 auto", // Center the container
          "&:hover": {
           // transform: "scale(1.01)", // Slightly enlarge on hover
            boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(30, 252, 30, 0.9)", // Bright shadow
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textAlign: "center",
            mt: {xs:8, sm:12, md: 24},
            fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem" }, // Responsive font size
          }}
        >
          Welcome
        </Typography>
        <Typography
          variant="h4"
          sx={{
            my: 8,
            px: {xs: 2, sm: 4, md: 12},
            textAlign: "center",
            fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" }, // Responsive font size
          }}
        >
          I, like you, am a story in progress—filled with chapters of discovery, pages of resilience, and unwritten lines of endless potential.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 8,
            flexDirection: { xs: "column", sm: "row" }, // Stack buttons on small screens
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#f90",
              color: "#000 !important",
              borderRadius: "24px",
              mb: { xs: 2, sm: 0 }, // Add margin for stacked buttons
              boxShadow: "0px 15px 30px rgba(94, 43, 255, 0.4), 0px 0px 25px rgba(255, 255, 255, 0.5)", // Bright shadow
              "&:hover": {
                backgroundColor: "#ff6700",
          boxShadow: "0px 15px 30px rgba(94, 43, 255, 0.5), 0px 0px 25px rgba(255, 255, 255, 0.5)", // Bright shadow
        },
            }}
          >
            Learn More About Me
          </Button>
        </Box>
      </Box>
  );
};

export default Hero;
