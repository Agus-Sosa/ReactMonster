import Box from "@mui/material/Box"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import title_game from '../../assets/img/title_game.png'
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";
import AdminBtn from './AdminBtn';
const HeaderMobile = ({user, logoutButton}) => {
    const [openMenu, setOpenMenu]= useState(false);


 

   const handleOpenMenu = (newOpen) => () => {
    setOpenMenu(newOpen);
  };




    const listMobileMenu = (
        <Box component="header" sx={{height:"100%",position:"sticky", top:0,zIndex:1100,backgroundColor:"#1e1e1e", color:"white", display:"flex", flexDirection:"column", alignItems:"start",p:2, gap:2}}>
            <Box component="div" sx={{display: 'flex', justifyContent:"space-between", alignItems:"center", width:"100%"}}>
            <Link to='/'>
              <Box component="img" src={title_game} sx={{width:"100px"}}></Box>
            </Link>
            <Button onClick={handleOpenMenu(false)} sx={{color:"white", fontSize:"30px"}}>
                <CloseIcon/>
            </Button>   
            </Box>

        <Box component="div" sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2, alignItems: "start" }}>
          <AdminBtn/> 
              <Box style={{textDecoration:"none", color:"white", fontSize:"20px", width:"100%", textAlign:"start"}} onClick={handleOpenMenu(false)}>Foro</Box>

                <AuthButton user={user} logoutButton={logoutButton} isOpenModalMobile={()=>setOpenMenu(false)}/>
                
            </Box>
        </Box>
    )


  return (
  <Box component="header" sx={{display:"flex", justifyContent:"space-between  ", alignItems:"center", backgroundColor:"#1e1e1e", color:"white", p:2}} >
    <Link to='/'>
        <Box component="img" src={title_game} sx={{width:"100px"}}/>
    </Link>



    <Button  onClick={handleOpenMenu(true)}>
        <MenuRoundedIcon sx={{color:"white"}}/>
    </Button>
    <Drawer PaperProps={{sx:{width:"100%"}}} open={openMenu} onClose={handleOpenMenu(false)} anchor="left">
        {listMobileMenu}
    </Drawer>
    
  </Box>
  
)
}

export default HeaderMobile