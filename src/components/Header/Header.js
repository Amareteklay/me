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
  Tooltip,
  useTheme as useMuiTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import LanguageIcon from "@mui/icons-material/Language"
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Link as ScrollLink } from "react-scroll"
import { useLanguage } from "../../utils/LanguageContext"
import { useTheme } from "../../utils/ThemeContext"

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null)
  const { language, setLanguage } = useLanguage()
  const { isDarkMode, toggleTheme } = useTheme()
  const muiTheme = useMuiTheme()

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
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: muiTheme.palette.background.default,
        color: muiTheme.palette.text.primary,
        transition: 'all 0.3s ease-in-out',
        borderBottom: `1px solid ${muiTheme.palette.divider}`
      }}
      elevation={0}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(true)}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ 
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
          }}
        >
          Amare Teklay
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.to}
              sx={{ 
                color: "inherit",
                mx: 1.5,
                px: 2,
                fontSize: "1rem",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: muiTheme.palette.primary.main,
                  backgroundColor: muiTheme.palette.action.hover,
                },
              }}
              component={ScrollLink}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        <Tooltip title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
          <IconButton 
            sx={{ 
              ml: 1,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                color: muiTheme.palette.primary.main,
              }
            }} 
            onClick={toggleTheme} 
            color="inherit"
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
        <IconButton
          color="inherit"
          onClick={handleLanguageClick}
          sx={{ 
            ml: 1,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              color: muiTheme.palette.primary.main,
            }
          }}
        >
          <LanguageIcon />
        </IconButton>
        <Menu
          anchorEl={languageAnchorEl}
          open={Boolean(languageAnchorEl)}
          onClose={handleLanguageClose}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: muiTheme.palette.background.paper,
              color: muiTheme.palette.text.primary,
            },
          }}
        >
          {Object.entries(languageMap).map(([code, label]) => (
            <MenuItem
              key={code}
              onClick={() => handleLanguageSelect(code)}
              selected={language === code}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: muiTheme.palette.action.selected,
                },
                '&:hover': {
                  backgroundColor: muiTheme.palette.action.hover,
                },
              }}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ 
          display: { sm: "none" },
          '& .MuiDrawer-paper': {
            backgroundColor: muiTheme.palette.background.default,
            color: muiTheme.palette.text.primary,
            borderRight: `1px solid ${muiTheme.palette.divider}`
          }
        }}
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
              sx={{
                '&:hover': {
                  backgroundColor: muiTheme.palette.action.hover,
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  )
}

export default Header
