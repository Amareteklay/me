import React from "react"
import { Box, Button, Grid, Typography, Avatar } from "@mui/material"
import ProfilePic from "../../assets/images/profile-pic.jpg" // Replace with your profile image

const About = () => {
  return (
      <Box id="about" sx={{
    backgroundColor: "#00171F", // Dark background
    p: 4, // Padding
    my: 8,
    //borderTop: "10px #5E2BFF solid", // Highlighted border
    borderRadius: "18px",
    boxShadow: "0px 10px 20px rgba(159, 32, 66, 0.8), 0px 0px 15px rgba(247, 179, 43, 0.8)", // Bright shadow
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
    minHeight: "75vh",
  }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", mb: 4, textAlign: "center", color: "#fff" }}
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
              Hi, I’m Amare, an economist and software developer.
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
          <Box sx={{display: "flex", mt: 8, justifyContent: "center"}}>
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
           Get in Touch
          </Button>
          </Box>
        </Box>
  )
}

export default About
