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
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { Link as ScrollLink } from "react-scroll"

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
