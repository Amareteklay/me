import React from "react"
import { Box, Typography, Container } from "@mui/material" // Box is from '@mui/material'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab"
import CustomBox from "../Containers/CustomBox"
import CustomContainer from "../Containers/CustomContainer"

const insights = [
  {
    year: "2020",
    insight:
      "Started my journey in web development and learned the fundamentals.",
  },
  { year: "2021", insight: "Built and deployed my first full-stack project." },
  {
    year: "2022",
    insight:
      "Collaborated on open-source projects and improved teamwork skills.",
  },
  {
    year: "2023",
    insight: "Expanded expertise in React and advanced JavaScript concepts.",
  },
]

const Insights = () => {
  return (
    
      <CustomContainer id="insights" backgroundColor={"#262626"} skewness={"skew(0deg)"}>
      <Container sx={{
    backgroundColor: "#00171F", // Dark background
    borderRadius: "18px",
    p: 4, // Padding
    //borderTop: "10px #5E2BFF solid", // Highlighted border
    boxShadow: "0px 10px 20px rgba(247, 179, 43, 0.8), 0px 0px 15px rgba(94, 43, 255, 0.6)", // Bright shadow
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
   
  }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
        >
          Insights
        </Typography>
        <Timeline position="alternate">
          {insights.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="dotcolor" />
                {index < insights.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6">{item.year}</Typography>
                <Typography variant="body2">{item.insight}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        </Container>
      </CustomContainer>
   
  )
}

export default Insights
