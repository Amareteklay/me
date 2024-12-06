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
    <Box
      id="insights"
      sx={{
        p: 4, // Padding
        my: 8,
        backgroundColor: "#fff",
      }}
    >
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
    </Box>
  )
}

export default Insights
