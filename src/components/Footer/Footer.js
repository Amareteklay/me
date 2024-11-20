import React from "react"
import { Box, Container, Grid, Typography, IconButton } from "@mui/material"
import { LinkedIn, GitHub, Twitter, Email } from "@mui/icons-material"

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1a73e8", color: "#fff", py: 4 }}>
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
              href="https://linkedin.com"
              target="_blank"
              color="inherit"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://github.com"
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
            <IconButton href="mailto:your-email@example.com" color="inherit">
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
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
