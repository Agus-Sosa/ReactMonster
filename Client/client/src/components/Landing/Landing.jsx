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

    <h2 id='eslogan'>Domina cada movimiento. la victoria es para quien mejor la planifica</h2>

    <Button className='btn-play'
    sx={{
    backgroundImage: `url(${btnbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "yellow",
    border: "2px solid red",
    borderRadius: "8px",
    padding: "20px 60px",
    fontWeight: "bold",
    textTransform: "uppercase",
    "&:hover": {
      background: "linear-gradient(45deg, #ff4b2b, #ff416c)",
    },
    textShadow: "-1px -1px 0 red,  1px -1px 0 red,-1px  1px 0 red,1px  1px 0 red; "
  }}
    > JUGAR AHORA</Button>
    
    </section>
    </>
  )
}

export default Landing