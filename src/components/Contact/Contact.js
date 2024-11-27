import React from "react"
import { Box, Typography, TextField, Button } from "@mui/material"
import CustomBox from "../Containers/CustomBox"
import CustomContainer from "../Containers/CustomContainer"

const Contact = () => {
  return (
    <CustomBox id="contact" gradientType={"type2"}>
      <CustomContainer backgroundColor={"#D8D8D8"}>
        <Box
          sx={{
            border: "2px solid #fff",
            py: 2,
            borderRadius: "10px",
            px: { xs: "10%", sm: "15%", md: "10%" }, // Responsive horizontal margins
            minWidth: { xs: "80%", sm: "70%", md: "50%" }, // Responsive width
            mx: { xs: "10%", sm: "15%", md: "20%" },
            backgroundColor: "#07004D",
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
    </CustomBox>
  )
}

export default Contact
