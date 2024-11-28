import React from "react"
import { Box, Container, Typography, Grid, Chip } from "@mui/material"
import CustomBox from "../Containers/CustomBox"
import CustomContainer from "../Containers/CustomContainer"

const skills = {
  technical: ["React", "JavaScript", "Node.js", "CSS", "Material UI", "Git"],
  soft: [
    "Problem-Solving",
    "Communication",
    "Teamwork",
    "Adaptability",
    "Leadership",
  ],
}

const Skills = () => {
  return (
    
      <CustomContainer backgroundColor={"#262626"} skewness={"skew(0deg)"}>
      <Container sx={{
    backgroundColor: "#00171F", // Dark background
    borderRadius: "18px",
    p: 4, // Padding
    //borderTop: "10px #5E2BFF solid", // Highlighted border
    boxShadow: "0px 10px 20px rgba(46, 196, 182, 0.8), 0px 0px 15px rgba(94, 43, 255, 0.6)", // Bright shadow
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
  }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
        >
          Skills
        </Typography>
        <Grid container spacing={4}>
          {/* Technical Skills */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Technical Skills
            </Typography>
            {skills.technical.map((skill, index) => (
              <Chip label={skill} key={index} sx={{ m: 0.5 }} />
            ))}
          </Grid>
          {/* Soft Skills */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Soft Skills
            </Typography>
            {skills.soft.map((skill, index) => (
              <Chip label={skill} key={index} sx={{ m: 0.5 }} />
            ))}
          </Grid>
        </Grid>
        </Container>
      </CustomContainer>
   
  )
}

export default Skills
