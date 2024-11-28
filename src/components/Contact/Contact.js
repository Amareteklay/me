import React from "react"
import { Box, Typography, TextField, Button } from "@mui/material"
import CustomBox from "../Containers/CustomBox"
import CustomContainer from "../Containers/CustomContainer"

const Contact = () => {
  return (
    
      <CustomContainer backgroundColor={"#262626"} skewness={"skew(0deg)"}>
        <Box
          sx={{
            backgroundColor: "#00171F", // Dark background
            borderRadius: "18px",
            p: 4, // Padding
            //borderTop: "10px #5E2BFF solid", // Highlighted border
            boxShadow: "0px 10px 20px rgba(247, 179, 43, 0.8), 0px 0px 15px rgba(247, 179, 43, 0.8)", // Bright shadow
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
           
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
          >
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
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              margin="normal"
              variant="filled"
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
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
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="black"
              //fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#902D41",
                top: "0 auto",
              }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </CustomContainer>
    
  )
}

export default Contact
