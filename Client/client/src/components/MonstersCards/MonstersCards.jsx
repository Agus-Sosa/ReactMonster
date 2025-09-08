import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import monsterImage from '../../assets/img/monster-test.png'; 

const MonsterCard = ({ name, description }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Card sx={{ position: "relative", width: 250, margin: 2 }}>
      <CardMedia
        component="img"
        image={monsterImage}
        alt={name}
        sx={{
          height: 300,
          filter: showOverlay ? "brightness(30%)" : "brightness(100%)",
          transition: "filter 0.3s"
        }}
      />

      {/* BOTON */}
      <IconButton
        onClick={() => setShowOverlay(!showOverlay)}
        sx={{ position: "absolute", top: 5, right: 5, color: "white" }}
      >
        <AddIcon />
      </IconButton>

      {/* INFO MONSTRUO */}
      {showOverlay && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: 2
          }}
        >
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      )}
    </Card>
  );
};

export default function MonstersCards() {
  const monsters = [
    { name: "Monstruo 1", description: "Descripción del monstruo 1" },
    { name: "Monstruo 2", description: "Descripción del monstruo 2" },
    { name: "Monstruo 3", description: "Descripción del monstruo 3" },
    { name: "Monstruo 4", description: "Descripción del monstruo 4" },
    { name: "Monstruo 5", description: "Descripción del monstruo 5" },
    { name: "Monstruo 6", description: "Descripción del monstruo 6" }
  ];

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {monsters.map((monster, index) => (
        <MonsterCard
          key={index}
          name={monster.name}
          description={monster.description}
        />
      ))}
    </Box>
  );
}
