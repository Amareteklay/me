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
    <CustomBox id="skills" gradientType={"type2"}>
      <CustomContainer backgroundColor={"#14591D"}>
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
      </CustomContainer>
    </CustomBox>
  )
}

export default Skills
