import React from 'react'
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import "./Landing.css";
import btnbg from '../../assets/img/test.png';
import titulogame from "../../assets/img/title_game.png";

function Landing() {
  return (
    <>
    <section className='landing'>
    <img className="title-img" src={titulogame} alt="Nombre del juego"/>

    <h2 id='eslogan'>Domina la guerra, controla la carne, gobierna el mundo.</h2>

    <Button className='btn-play'
    sx={{
    backgroundImage: `url(${btnbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "yellow",
    border: "1px solid red",
    borderRadius: "5px",
    padding: "20px 60px",
    fontWeight: "bold",
    textTransform: "uppercase",
    "&:hover": {
      backgroundBlendMode: "luminosity",
      backgroundColor:'rgba(255, 0, 0, 0.95)'
    },
    textShadow: "-1px -1px 0 red,  1px -1px 0 red,-1px  1px 0 red,1px  1px 0 red; "
  }}
    > JUGAR AHORA</Button>
    
    </section>
    </>
  )
}

export default Landing