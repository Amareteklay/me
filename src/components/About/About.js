import React from "react"
import { Box, Container, Grid, Typography, Avatar } from "@mui/material"
import ProfilePic from "../../assets/images/profile-pic.jpg" // Replace with your profile image
import CustomBox from "../Containers/CustomBox"
import CustomContainer from "../Containers/CustomContainer"

const About = () => {
  return (
    
      <CustomContainer backgroundColor={"#262626"} skewness={"skew(0deg)"}>
      <Container sx={{
    backgroundColor: "#00171F", // Dark background
    p: 4, // Padding
    //borderTop: "10px #5E2BFF solid", // Highlighted border
    borderRadius: "18px",
    boxShadow: "0px 10px 20px rgba(159, 32, 66, 0.8), 0px 0px 15px rgba(247, 179, 43, 0.8)", // Bright shadow
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
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
      </CustomContainer>
   
  )
}

export default About
