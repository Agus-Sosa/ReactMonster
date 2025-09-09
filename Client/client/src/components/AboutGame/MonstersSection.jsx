import React from "react";
import { Box } from "@mui/material";
import MonstersSectionButton from "../AboutGame/MonstersSectionButton";
import monsters_categorie from "../../assets/img/monsters_categorie.png";

const MonstersSection = () => {
  const handleClick = () => {
    window.location.href = "/monsters"; // URL a la sección de monstruos
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        height:'100vh',
        gap: 6,
        p: 6,
        bgcolor: "#6B0F0F",
      }}
    >
      {/* Imagen de monstruos */}
      <Box
        component="img"
        src={monsters_categorie}
        alt="Monstruos"
        sx={{
          width: { xs: "80%", md: "40%" },
          maxWidth: 400,
          objectFit: "contain",
        }}
      />

      {/* Texto */}
      <Box sx={{ maxWidth: 500, textAlign: "left", color: "#F0E6D2" }}>
        {/* Título */}
        <Box
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3rem" }, // escala según pantalla
            mb: 2,
          }}
        >
          Engendros
        </Box>

        {/* Subtítulo */}
        <Box
          sx={{
            fontWeight: "medium",
            fontSize: { xs: "0.9rem", md: "1rem" },
            mb: 2,
          }}
        >
          La creatividad es tu mayor poder
        </Box>

        {/* Texto principal */}
        <Box
          sx={{
            /*fontWeight: "bold", */ /* le  quite el bold me gusta mas asi*/ 
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            lineHeight: 1.6,
          }}
        >
          Más allá de la fuerza bruta, cada monstruo posee habilidades únicas y estilos distintos.{" "}
          Dóminalos, personalízalos y crea estrategias para destacar.{" "}
          Ningún monstruo luchará igual, y cada enfrentamiento será irrepetible.
        </Box>

        {/* Botón */}
        <MonstersSectionButton
          text="Ver todos los engendros"
          onClick={handleClick}
        />
      </Box>
    </Box>
  );
};

export default MonstersSection;

