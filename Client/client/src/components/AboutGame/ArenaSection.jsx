import React from "react";
import { Box, Avatar } from "@mui/material";
import arena_home from "../../assets/img/arena_home.png";
import ArenaButton from "../AboutGame/ArenaSectionButton";

const Arena = () => {
  const handleClick = () => {
    // PONER URL DEL FORO CUIDADOOOOO
    window.location.href = "/arenas";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        px: { xs: 4, md: 8 },
        py: { xs: 6, md: 10 },
        bgcolor: "#E8E3CE",
        minHeight: "100vh", // OJO PUSE ESTO PARA QUE OCUPE TODA LA PANTALLA
      }}
    >
      {/* Texto Arena */}
      <Box sx={{ maxWidth: 500, textAlign: "left" }}>
        <Box
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            color: "#3B1F0B",
            letterSpacing: 1,
            mb: 2,
          }}
        >
          ARENAS
        </Box>

        <Box
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            color: "#3B1F0B",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Lucha por turnos en todo el mundo
        </Box>

        <Box
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            color: "#3B1F0B",
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          Cada arena es un escenario estratégico donde podrás demostrar tu ingenio y planificar
          jugadas únicas. Están diseñadas para combates por turnos, tácticas inteligentes y momentos
          memorables. ¡Haz la jugada que otros recordarán y querrán imitar!
        </Box>

        <ArenaButton text="Ver todas las arenas" onClick={handleClick} />
      </Box>

      {/* Imagen Arena */}
      <Avatar
        src={arena_home}
        alt="Arena"
        sx={{
          width: { xs: 260, md: 380 },
          height: { xs: 260, md: 380 },
          borderRadius: "50%",
          boxShadow: 4,
          border: "4px solid #3B1F0B",
        }}
      />
    </Box>
  );
};

export default Arena;
