// src/styles/Theme.js
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: { main: "#1a73e8" }, // Adjust if needed
    secondary: { main: "#ff9800" },
    dotcolor: { main: "#6b26ff" },
    background: { default: "#000", paper: "#282c34" }, // Darker background
    text: { primary: "#ffffff", secondary: "#c0c0c0" },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h4: { fontWeight: "bold" },
    h6: { fontWeight: 500 },
    body1: { color: "#c0c0c0" }, // Adjust text styles globally
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#e5e5f7",
          opacity: 0.9,
          backgroundImage: "radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)",
          backgroundSize: "10px 10px",
        },
      },
    },
  },
})

export default theme
