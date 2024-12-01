// src/App.js

import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "./styles/Theme" // Import theme
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
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
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
