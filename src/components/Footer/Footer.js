import React from "react"
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Fab,
} from "@mui/material"
import {
  LinkedIn,
  GitHub,
  Twitter,
  Email,
  KeyboardArrowUp,
} from "@mui/icons-material"
import { animateScroll as scroll } from "react-scroll"

const Footer = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    })
  }

  return (
    <Box sx={{ backgroundColor: "#031927", color: "#fff", py: 4 }}>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
              About Me
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
              Projects
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
              Insights
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
              Contact
            </Typography>
          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" sx={{ mb: 2 }}>
              Connect with Me
            </Typography>
            <IconButton
              href="https://linkedin.com/in/Amareteklay"
              target="_blank"
              color="inherit"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://github.com/Amareteklay"
              target="_blank"
              color="inherit"
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              color="inherit"
            >
              <Twitter />
            </IconButton>
            <IconButton href="mailto:amareteklay@gmail.com" color="inherit">
              <Email />
            </IconButton>
          </Grid>

          {/* Closing Message */}
          <Grid item xs={12} md={4} textAlign="right">
            <Typography variant="h6" sx={{ mb: 2 }}>
              Stay Inspired
            </Typography>
            <Typography variant="body2">
              "The only limit to our realization of tomorrow is our doubts of
              today." – F. D. Roosevelt
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          sx={{
            mt: 4,
            textAlign: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            pt: 2,
          }}
        >
          © {new Date().getFullYear()} Amare Teklay. All rights reserved.
        </Typography>
      </Container>

      {/* Scroll to Top Arrow */}
      <Fab
        color="secondary"
        size="small"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Box>
  )
}

export default Footer
