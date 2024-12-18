// src/App.js

import React from "react"
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import getTheme from "./styles/Theme"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Insights from "./components/Insights/Insights"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import CustomContainer from "./components/Containers/CustomContainer"
import { LanguageProvider } from "./utils/LanguageContext"
import { ThemeProvider, useTheme } from "./utils/ThemeContext"

const ThemedApp = () => {
  const { isDarkMode } = useTheme();
  const theme = getTheme(isDarkMode ? 'dark' : 'light');

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <CustomContainer>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Insights />
        <Contact />
      </CustomContainer>
      <Footer />
    </MuiThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ThemedApp />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
