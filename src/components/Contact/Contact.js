import React from "react"
import { Box, Typography, TextField, Button } from "@mui/material"
import { Mail } from "@mui/icons-material"

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#00171F", // Dark background
        borderRadius: "18px",
        p: 4, // Padding
        my: 8,
        //borderTop: "10px #5E2BFF solid", // Highlighted border
        boxShadow:
          "0px 10px 20px rgba(247, 179, 43, 0.8), 0px 0px 15px rgba(247, 179, 43, 0.8)", // Bright shadow
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
      >
        <Mail sx={{ fontSize: 48, color: "#f90", textAlign: "center" }} />
        <br></br>
        Contact Me
      </Typography>
      <form
        action="https://formsubmit.co/amareteklay@gmail.com"
        method="POST"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <TextField
          label="Name"
          name="name"
          fullWidth
          required
          margin="normal"
          variant="filled"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 1,
            "& .MuiInputBase-input": {
              color: "#000", // Font color for the input text
            },
            "& .MuiInputLabel-root": {
              color: "#3d3d3d", // Font color for the label
            },
          }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          required
          margin="normal"
          variant="filled"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 1,
            "& .MuiInputBase-input": {
              color: "#000", // Font color for the input text
            },
            "& .MuiInputLabel-root": {
              color: "#3d3d3d", // Font color for the label
            },
          }}
        />
        <TextField
          label="Message"
          name="message"
          fullWidth
          required
          multiline
          rows={4}
          margin="normal"
          variant="filled"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 1,
            "& .MuiInputBase-input": {
              color: "#000", // Font color for the input text
            },
            "& .MuiInputLabel-root": {
              color: "#3d3d3d", // Font color for the label
            },
          }}
        />
        <Box sx={{ display: "flex", my: 4, justifyContent: "center" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#f90",
              color: "#000 !important",
              borderRadius: "24px",
              mb: { xs: 2, sm: 0 }, // Add margin for stacked buttons
              boxShadow:
                "0px 15px 30px rgba(94, 43, 255, 0.4), 0px 0px 25px rgba(255, 255, 255, 0.5)", // Bright shadow
              "&:hover": {
                backgroundColor: "#ff6700",
                boxShadow:
                  "0px 15px 30px rgba(94, 43, 255, 0.5), 0px 0px 25px rgba(255, 255, 255, 0.5)", // Bright shadow
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default Contact
