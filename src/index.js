import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Theme from "./styles/Theme"

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
