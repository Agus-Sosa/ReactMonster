import Box from '@mui/material/Box'
import React, { useState } from 'react'
import title_game from '../../assets/img/title_game.png'
import { Link } from 'react-router-dom';
import ModalAuthPrev from '../Authentication/ModalAuthPrev';
const HeaderDesktop = () => {

 const [openModal, setOpenModal] = useState(false);


  const handleOpenModal =()=> {
    setOpenModal(true);
  }
  const handleCloseModal = ()=> {
    setOpenModal(false);
  }

  return (
    <>
    
    <Box component="header" sx={{display:"flex", justifyContent:"space-between  ", alignItems:"center", backgroundColor:"#1e1e1e", color:"white", p:2}}>
        
        <Link to='/'>
        <Box component="img" src={title_game} sx={{width:"100px"}}>
        </Box>
        </Link>
        
        <Box component="nav" sx={{display:"flex", gap:2, alignItems:"center"}}>
        <Box component={Link} to="/foro"   sx={{backgroundColor:"#380E00", p:"10px" , border:"none", color:"white", cursor:"pointer", fontSize:"18px", borderRadius:"3px", textDecoration:"none",transition:"all .5s", "&:hover":{backgroundColor:"#8E1616"}}}>
            Comunidad
        </Box>
        <Box onClick={handleOpenModal} component="button" sx={{backgroundColor:"#8E1616", p:"10px" , border:"none", color:"white", cursor:"pointer", fontSize:"18px", borderRadius:"3px", transition:"all .5s", "&:hover":{backgroundColor:"#380E00"}}}>
            Jugar Ahora
        </Box>

        </Box>

    </Box>
    <ModalAuthPrev handleCloseModal={handleCloseModal} openModal={openModal}/>
        </>

    
)
}

export default HeaderDesktop