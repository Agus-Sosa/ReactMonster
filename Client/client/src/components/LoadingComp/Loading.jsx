import React from 'react'
import { Box } from "@mui/system";
import { CircularProgress } from '@mui/material';
import forumtexture from "../../assets/img/foro-bck.png";

export default function Loading() {
  return (
     <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${forumtexture})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1a1a1a",
        backgroundBlendMode: "color-dodge",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // centramos vertical y horizontal
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: "12px",
          padding: "40px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          color: "white",
        }}
      >
        <CircularProgress color="inherit" />
        
          Cargando...
        
      </Box>
    </Box>
  )
}
