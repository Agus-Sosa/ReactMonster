import React, { useState } from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import monsterImage from '../../assets/img/monster-test.png'; 
import ToggleButton from "../MonstersCards/ToggleButton";

const MonsterCard = ({ name, description }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Card
      sx={{
        position: "relative",
        width: 250,
        margin: 2,
        backgroundColor: "transparent", 
        boxShadow: "0px 4px 15px rgba(0,0,0,0.5)",
        // boxShadow: "0px 6px 20px rgba(0,0,0,0.6)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={monsterImage}
        alt={name}
        sx={{
          height: 300,
          filter: showOverlay ? "brightness(30%)" : "brightness(100%)",
          transition: "filter 0.3s",
        }}
      />

      {/* MAS INFO */}
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
            padding: 2,
          }}
        >
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      )}

      {/* BOTON TOGLE */}
      <Box sx={{ position: "absolute", bottom: 5, right: 5 }}>
        <ToggleButton
          open={showOverlay}
          onToggle={() => setShowOverlay(!showOverlay)}
        />
      </Box>
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
    { name: "Monstruo 6", description: "Descripción del monstruo 6" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4, 
          maxWidth: "1200px",
        }}
      >
        {monsters.map((monster, index) => (
          <MonsterCard
            key={index}
            name={monster.name}
            description={monster.description}
          />
        ))}
      </Box>
    </Box>
  );
}
