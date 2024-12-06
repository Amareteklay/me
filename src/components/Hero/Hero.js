import React from "react"
import { Typography, Button, Box, useTheme } from "@mui/material"

const Hero = () => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        p: 4,
        my: 12,
        backgroundColor: theme.palette.background.paper,
        borderRadius: "18px",
        border: `1px solid ${theme.palette.divider}`,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          mb: 2,
          textAlign: "center",
          mt: { xs: 8, sm: 12, md: 24 },
          fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem" },
          color: theme.palette.text.primary,
        }}
      >
        Welcome
      </Typography>
      <Typography
        variant="h4"
        sx={{
          my: 8,
          px: { xs: 2, sm: 4, md: 12 },
          textAlign: "center",
          fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" },
          color: theme.palette.text.secondary,
        }}
      >
        I, like you, am a story in progress—filled with chapters of discovery,
        pages of resilience, and unwritten lines of endless potential.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 8,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "#fff !important",
            borderRadius: "24px",
            mb: { xs: 2, sm: 0 },
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Learn More About Me
        </Button>
      </Box>
    </Box>
  )
}

export default Hero
