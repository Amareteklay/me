import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Menu,
  MenuItem,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import LanguageIcon from "@mui/icons-material/Language"
import { Link as ScrollLink } from "react-scroll"
import { useLanguage } from "../../utils/LanguageContext"

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null)
  const { language, setLanguage } = useLanguage()

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget)
  }

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null)
  }

  const handleLanguageSelect = (lang) => {
    setLanguage(lang)
    handleLanguageClose()
  }

  const languageMap = {
    en: 'En',
    sv: 'Sv',
    ti: 'ትግ'
  }

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  const navItems = [
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Insights", to: "insights" },
    { label: "Contact", to: "contact" },
  ]

  return (
    <>
      {/* AppBar for Desktop */}
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#031927", color: "#fff", opacity: 0.75 }}
      >
        <Toolbar>
          {/* Hamburger Icon for Mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* App Title */}
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              mx: 8,
              background: "linear-gradient(90deg, #ff6ec4, #7873f5, #42d392)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "aurora 10s infinite",
              "@keyframes aurora": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
              },
              backgroundSize: "200% 200%", // Smooth gradient animation
            }}
          >
            Amare Teklay
          </Typography>
          {/* Nav Links for Desktop */}
          <Box sx={{ display: { xs: "none", sm: "block" }, marginRight: 2 }}>
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth
                duration={500}
                offset={-64} // Offset to account for AppBar height
              >
                <Button
                  color="inherit"
                  sx={{
                    mx: 1.5, // Margin between buttons
                    px: 2, // Padding for larger click area
                    fontSize: "1rem", // Larger font size for better readability
                    textTransform: "none", // Remove uppercase transformation
                    transition: "all 0.3s ease", // Smooth transitions for hover effects
                    "&:hover": {
                      color: "#ff6700", // Change text color on hover
                      backgroundColor: "rgba(255, 103, 0, 0.1)", // Light background on hover
                      borderRadius: "8px", // Slightly rounded corners on hover
                    },
                  }}
                >
                  {item.label}
                </Button>
              </ScrollLink>
            ))}
          </Box>

          {/* Language Dropdown */}
          <Box sx={{ ml: 2, mr: 4 }}>
            <Button
              color="inherit"
              onClick={handleLanguageClick}
              startIcon={<LanguageIcon sx={{ color: '#1EFC1E' }} />}
              sx={{
                textTransform: "none",
                minWidth: "auto",
                fontFamily: language === 'ti' ? 'Noto Sans Ethiopic, sans-serif' : 'inherit'
              }}
            >
              {languageMap[language]}
            </Button>
            <Menu
              anchorEl={languageAnchorEl}
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageClose}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#031927",
                  color: "#fff",
                  mt: 1,
                },
              }}
            >
              <MenuItem 
                onClick={() => handleLanguageSelect("en")}
                selected={language === "en"}
              >
                En
              </MenuItem>
              <MenuItem 
                onClick={() => handleLanguageSelect("sv")}
                selected={language === "sv"}
              >
                Sv
              </MenuItem>
              <MenuItem 
                onClick={() => handleLanguageSelect("ti")}
                selected={language === "ti"}
                sx={{ 
                  fontFamily: 'Noto Sans Ethiopic, sans-serif',
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255, 103, 0, 0.1)",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255, 103, 0, 0.2)",
                  },
                }}
              >
                ትግ
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { sm: "none" } }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.to}
              onClick={toggleDrawer(false)}
              component={ScrollLink}
              to={item.to}
              smooth
              duration={500}
              offset={-64}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default Header
