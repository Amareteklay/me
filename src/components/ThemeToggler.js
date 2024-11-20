import React, { useState } from "react"
import { IconButton } from "@mui/material"
import { Brightness4, Brightness7 } from "@mui/icons-material"
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles"

const ThemeToggle = () => {
  const [mode, setMode] = useState("light")

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <IconButton
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        color="inherit"
      >
        {mode === "light" ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </ThemeProvider>
  )
}

export default ThemeToggle
