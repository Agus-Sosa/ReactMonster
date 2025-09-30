import React from 'react'
import { Box, Alert, Typography } from '@mui/material';
import forumtexture from "../../assets/img/foro-bck.png";

export default function ErrorComp() {
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
        alignItems: "center", // centrado total
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
          width: "80%",
          maxWidth: "500px",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Ocurrió un error
        </Typography>

        <Alert severity="error" sx={{ width: "100%" }}>
          Error al obtener la información. Intenta recargar la página.
        </Alert>
      </Box>
    </Box>
  )
}