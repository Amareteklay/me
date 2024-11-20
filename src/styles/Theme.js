import { createTheme } from "@mui/material/styles"

const Theme = createTheme({
  palette: {
    mode: "light", // Can be toggled with dark mode
    primary: {
      main: "#1a73e8", // Modern trustworthy blue
    },
    secondary: {
      main: "#ff9800", // Warm orange accent
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
})

export default Theme
