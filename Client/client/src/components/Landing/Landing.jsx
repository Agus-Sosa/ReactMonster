import React, { useState } from 'react'
import "./Landing.css";
import btnbg from '../../assets/img/test.png';
import titulogame from "../../assets/img/title_game.png";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function Landing() {
  const [openModal, setOpenModal] = useState(false);


  const handleOpenModal =()=> {
    setOpenModal(true);
  }
  const handleCloseModal = ()=> {
    setOpenModal(false);
  }

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#212121',
  color:"white",
  border: '1px solid #E3E0C3',
  boxShadow: 24,

};


const styleButton = {
 
  textDecoration: "none",
  p:2
}


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
  onClick={handleOpenModal}
    > JUGAR AHORA</Button>
    

   <Modal
        keepMounted
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Button onClick={handleCloseModal} sx={{color:"black", background:"#E3E0C3", position:"absolute", borderRadius:"0px"}}><CloseIcon/></Button>

          <Box sx={{padding:"35px"}}>

          <Box component="h2" sx={{textAlign:'center',mb:"50px"}}>
              Preparate para Jugar
          </Box>
          <Box component="div" sx={{display:"flex", gap:"10px", justifyContent:'center'}}>
              <Button   variant='contained'  sx={{...styleButton, backgroundColor:"#8E1616", color:"white"}}  component={Link} to="/login" >
                  Iniciar Sesion
              </Button>
              <Button variant='contained' sx={{...styleButton, backgroundColor:"#E3E0C3", color:"black"}} component={Link} to="/register">
                  Registrarse
              </Button>
          </Box>
          </Box>

        </Box>
      </Modal>
    </Box>
    </>
  )
}
export default Landing