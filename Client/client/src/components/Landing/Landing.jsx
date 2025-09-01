import React from 'react'
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import "./Landing.css";
import btnbg from '../../assets/img/test.png';
import titulogame from "../../assets/img/title_game.png";
import Box from '@mui/material/Box';


function Landing() {
  return (
    <>
    <Box component='section' className='landing'>
    <img className="title-img" src={titulogame} alt="Nombre del juego"/>

    <h2 id='eslogan'>Domina la guerra, controla la carne, gobierna el mundo.</h2>

    <Button className='btn-play'
    sx={{
        backgroundImage: `url(${btnbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffea00",
        border: "2px solid #ff0000",
        borderRadius: "8px",
        padding: "20px 60px",
        fontWeight: "bold",
        fontFamily: "'Creepster', cursive",
        textTransform: "uppercase",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 0 15px #ff4500, inset 0 0 20px #ff0000",
        textShadow: "0 0 5px #ff0000, 0 0 10px #ff4500, 2px 2px 2px black",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          animation: "fire-shake 10s",
          textShadow: "0 0 15px #ffea00, 0 0 25px #ff4500, 2px 2px 2px black",
          transform: "scale(1.08)",
        },
  }}
  onClick={() => {
    alert('El juego todavia no esta listo, aguanta(?');
  }}
    > JUGAR AHORA</Button>
    
    </Box>
    </>
  )
}
export default Landing