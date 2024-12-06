// src/styles/Theme.js
import { createTheme } from "@mui/material/styles"

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    ...(mode === 'light' 
      ? {
          // Light mode colors
          primary: { main: "#1a73e8" },
          secondary: { main: "#ff9800" },
          dotcolor: { main: "#6b26ff" },
          background: { 
            default: "#ffffff",
            paper: "#f8f9fa",
            container: "#ffffff"
          },
          text: { 
            primary: "#333333",
            secondary: "#666666" 
          },
          action: {
            hover: 'rgba(26, 115, 232, 0.08)',
            selected: 'rgba(26, 115, 232, 0.16)',
          }
        }
      : {
          // Dark mode colors
          primary: { main: "#1a73e8" },
          secondary: { main: "#ff9800" },
          dotcolor: { main: "#6b26ff" },
          background: { 
            default: "#121212",
            paper: "#1e1e1e",
            container: "#1a1a1a"
          },
          text: { 
            primary: "#ffffff",
            secondary: "#c0c0c0" 
          },
          action: {
            hover: 'rgba(26, 115, 232, 0.16)',
            selected: 'rgba(26, 115, 232, 0.24)',
          }
        }),
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h4: { fontWeight: "bold" },
    h6: { fontWeight: 500 },
    body1: { 
      color: mode === 'light' ? "#666666" : "#c0c0c0"
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: mode === 'light' ? "#ffffff" : "#121212",
          transition: "all 0.3s ease-in-out",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease-in-out",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease-in-out",
        },
      },
    },
  },
})

export default getTheme
