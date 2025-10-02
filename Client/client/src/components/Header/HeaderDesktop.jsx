import Box from '@mui/material/Box'
import React, { useContext, useState } from 'react'
import title_game from '../../assets/img/title_game.png'
import { Link } from 'react-router-dom';
import ModalAuthPrev from '../Authentication/ModalAuthPrev';
import { Avatar, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const HeaderDesktop = ({user, logoutButton}) => {
  const [anchorEl, setAnchorEl] = useState(null);
 const [openModal, setOpenModal] = useState(false);
   const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal =()=> {
    setOpenModal(true);
  }
  const handleCloseModal = ()=> {
    setOpenModal(false);
  }

  return (
    <>
    
    <Box component="header" sx={{display:"flex",position:"sticky", top:0,zIndex:1100, justifyContent:"space-between  ", alignItems:"center", backgroundColor:"#1e1e1e", color:"white", p:2}}>
        
        <Link to='/'>
        <Box component="img" src={title_game} sx={{width:"100px"}}>
        </Box>
        </Link>
        
        <Box component="nav" sx={{display:"flex", gap:2, alignItems:"center"}}>
        <Box component={Link} to="/foro"   sx={{backgroundColor:"#380E00", p:"10px" , border:"none", color:"white", cursor:"pointer", fontSize:"18px", borderRadius:"3px", textDecoration:"none",transition:"all .5s", "&:hover":{backgroundColor:"#8E1616"}}}>
            Comunidad
        </Box>
        {user ? (
          <>

             <Box>
            <Avatar component="button" onClick={handleClick} alt="Remy Sharp" src={user.profile_picture} />
          </Box>
           <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem >
          <Link to={'/profile'}>Ver perfil</Link>
        </MenuItem>
        <MenuItem onClick={logoutButton}>Cerrar Sesion</MenuItem>
      </Menu>
          </>
       
          
        ): (

        
        <Box onClick={handleOpenModal} component="button" sx={{backgroundColor:"#8E1616", p:"10px" , border:"none", color:"white", cursor:"pointer", fontSize:"18px", borderRadius:"3px", transition:"all .5s", "&:hover":{backgroundColor:"#380E00"}}}>
            Jugar Ahora
        </Box>
        )
      }
        </Box>

    </Box>
    <ModalAuthPrev handleCloseModal={handleCloseModal} openModal={openModal}/>
        </>

    
)
}

export default HeaderDesktop