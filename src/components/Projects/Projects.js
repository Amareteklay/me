import React from "react"
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material"
import CustomBox from "../Containers/CustomBox"
import CustomContainer from "../Containers/CustomContainer"

const projects = [
  {
    title: "Emotions and Sustainability",
    description:
      "A brief description of your project showcasing its features and purpose.",
    link: "https://github.com/your-repo/project-one",
    demo: "https://your-demo-link.com",
  },
  {
    title: "Emerging Pests and Pathogens (EPP)",
    description:
      "A short overview of another project highlighting its impact and technologies used.",
    link: "https://github.com/your-repo/project-two",
    demo: "https://your-demo-link.com",
  },
  // Add more projects here
]

const Projects = () => {
  return (
      <Box id="projects" sx={{
    backgroundColor: "#00171F", // Dark background
    borderRadius: "18px",
    p: 4, // Padding
    my: 4,
    //borderTop: "10px #5E2BFF solid", // Highlighted border
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
    boxShadow: "0px 15px 30px rgba(255, 103, 0, 1), 0px 0px 25px rgba(255, 255, 255, 0.8)", // Even brighter shadow on hover
    minHeight: "75vh",
  }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
        >
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: "auto" }}>
                  <Button
                    size="small"
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                  >
                    GitHub
                  </Button>
                  <Button
                    size="small"
                    href={project.demo}
                    target="_blank"
                    rel="noopener"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Box>
  )
}

export default Projects
