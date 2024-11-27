import React from "react"
import { Box } from "@mui/material"

const CustomContainer = ({ children, backgroundColor }) => {
  return (
    <Box
      sx={{
        width: "100%", // Full width up to the maxWidth
        padding: "32px", // Consistent inner padding
        margin: "0 auto", // Center the container horizontally
        //backgroundColor: "#07004D", //#1A535C#210124#320E3B#0D0221#0D0C1D#574AE2#004346#231651#002642#222E50#031927 Background color #0B0500 #001514#0B5351#092327#2F0147
        backgroundColor: {backgroundColor},
        borderRadius: "18px", // Optional for rounded corners
        marginBottom: "1px",
        marginTop: "1px",
        opacity: "0.95",
      }}
    >
      {children}
    </Box>
  )
}

export default CustomContainer
