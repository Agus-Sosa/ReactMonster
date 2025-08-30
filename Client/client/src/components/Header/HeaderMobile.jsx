import Box from "@mui/material/Box"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import title_game from '../../assets/img/title_game.png'
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';

const HeaderMobile = () => {
    const [openMenu, setOpenMenu]= useState(false);

   const handleOpenMenu = (newOpen) => () => {
    setOpenMenu(newOpen);
  };


  const listLink =[
    {name:"Foro", link:"#"},
  ]

    const listMobileMenu = (
        <Box component={"nav"} sx={{height:"100%", backgroundColor:"#1e1e1e", color:"white", display:"flex", flexDirection:"column", alignItems:"start",p:2, gap:2}}>
            <Box component="div" sx={{display: 'flex', justifyContent:"space-between", alignItems:"center", width:"100%"}}>
            <Box component="img" src={title_game} sx={{width:"100px"}}></Box>
            <Button onClick={handleOpenMenu(false)} sx={{color:"white", fontSize:"30px"}}>
                <CloseIcon/>
            </Button>   
            </Box>

            <Box component="div" sx={{width: "100%"}}>
                {listLink.map((item)=>(
                        <Box  key={item.name} style={{textDecoration:"none", color:"white", fontSize:"20px", padding:"10px", width:"100%", textAlign:"start"}} onClick={handleOpenMenu(false)}>{item.name}</Box>
                ))}

                <Box 
                sx={{ mt:2, background:"#D84040", textAlign:"center", p:"10px", borderRadius:"2px", fontSize:"20px", cursor:"pointer", transition:"all .5s", "&:hover":{backgroundColor:"#8E1616"}}}
                >
                    Jugar Ahora

                </Box>

            </Box>
        </Box>
    )


  return (
  <Box component="header" sx={{display:"flex", justifyContent:"space-between  ", alignItems:"center", backgroundColor:"#1e1e1e", color:"white", p:2}} >
    <Box component="img" src={title_game} sx={{width:"100px"}}>
    </Box>



    <Button  onClick={handleOpenMenu(true)}>
        <MenuRoundedIcon sx={{color:"white"}}/>
    </Button>
    <Drawer PaperProps={{sx:{width:"100%"}}} open={openMenu} onClose={handleOpenMenu(false)} anchor="right">
        {listMobileMenu}
    </Drawer>
  </Box>
)
}

export default HeaderMobile