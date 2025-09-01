import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
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
        gap: 4,
        p: 4,
        bgcolor: "#E8E3CE",
      }}
    >
      {/* Texto Arena */}
      <Box sx={{ maxWidth: 500, textAlign: "left" }}>
        <Box
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3rem" },
            color: "#3B1F0B",
            letterSpacing: 1,
          }}
        >
          ARENAS
        </Box>

        <Box variant="h6" sx={{ color: "#3B1F0B", mt: 2, fontWeight: 600 }}>
          Lucha por turnos en todo el mundo
        </Box>

        <Box variant="body1" sx={{ color: "#3B1F0B", mt: 1, lineHeight: 1.6 }}>
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
          width: 320,
          height: 320,
          borderRadius: "50%",
          boxShadow: 4,
          border: "4px solid #3B1F0B",
        }}
      />
    </Box>
  );
};

export default Arena;
