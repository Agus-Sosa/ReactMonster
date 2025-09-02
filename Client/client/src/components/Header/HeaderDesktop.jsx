import Box from '@mui/material/Box'
import React from 'react'
import title_game from '../../assets/img/title_game.png'
import { useNavigate } from 'react-router-dom';
const HeaderDesktop = () => {
    const navigate = useNavigate();    
        const irAlForo = () => {
        navigate('/foro');};
  return (
    <Box component="header" sx={{display:"flex", justifyContent:"space-between  ", alignItems:"center", backgroundColor:"#1e1e1e", color:"white", p:2}}>
        <Box component="img" src={title_game} sx={{width:"100px"}}>
        </Box>
        <Box component="nav" sx={{display:"flex", gap:2, alignItems:"center"}}>
        <Box component="a"  onClick={irAlForo} sx={{backgroundColor:"#380E00", p:"10px" , border:"none", color:"white", cursor:"pointer", fontSize:"18px", borderRadius:"3px", transition:"all .5s", "&:hover":{backgroundColor:"#8E1616"}}}>
            Foro
        </Box>
        <Box component="button" sx={{backgroundColor:"#8E1616", p:"10px" , border:"none", color:"white", cursor:"pointer", fontSize:"18px", borderRadius:"3px", transition:"all .5s", "&:hover":{backgroundColor:"#380E00"}}}>
            Jugar Ahora
        </Box>

        </Box>

    </Box>
)
}

export default HeaderDesktop