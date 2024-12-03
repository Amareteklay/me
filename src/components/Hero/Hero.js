import React from "react";
import { Typography, Button, Box } from "@mui/material";

const Hero = () => {
  return (
      <Box sx={{
        p: 4, // Padding
        my: 8,
      }}>
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
