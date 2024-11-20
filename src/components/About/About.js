import React from "react"
import { Box, Container, Grid, Typography, Avatar } from "@mui/material"
import ProfilePic from "../../assets/images/profile-pic.jpg" // Replace with your profile image

const About = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
        >
          About Me
        </Typography>
        <Grid container spacing={4} alignItems="center">
          {/* Profile Picture */}
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Avatar
              src={ProfilePic}
              alt="Profile Picture"
              sx={{ width: 200, height: 200, margin: "0 auto" }}
            />
          </Grid>
          {/* Text Content */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Hi, I’m [Your Name], a passionate [Your Role] with expertise in
              [Key Skills].
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              I thrive on solving complex problems, learning continuously, and
              building innovative solutions. Over the years, I have honed my
              skills in [Your Technical Skills] and am driven to create
              meaningful projects.
            </Typography>
            <Typography variant="body1">
              Beyond work, I enjoy exploring [Your Hobbies/Interests] and
              reflecting on the lessons life has to offer. My journey is fueled
              by curiosity, resilience, and a commitment to growth.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About
