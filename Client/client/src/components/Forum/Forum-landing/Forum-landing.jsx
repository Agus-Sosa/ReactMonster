import "./Foro-landing.css";
import React from 'react'
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import "./Forum-landing.css";
import foroImg from "../../../assets/img/foro-title.png";
import Box from '@mui/material/Box';


function LandingForo() {
  return (
    <>
    <Box component='section' className='landing-foro'>
    <img className="foro-img" src={foroImg} alt="Nombre del juego"/> 
    </Box>
    </>
  )
}
export default LandingForo