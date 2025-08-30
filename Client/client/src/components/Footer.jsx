import Box from '@mui/material/Box'
import title_game from '../assets/img/title_game.png'
import Button from '@mui/material/Button'
const Footer = () => {
  return (
    <Box component="footer" sx={{backgroundColor:"#1e1e1e", color:"white", m:"auto", px:10 , py:5}}>
      <Box component="img" sx={{width:"100px"}} src={title_game} alt=""/>
      <Box component="div" sx={{ width:"100%", py:"0.5px", my:"20px", background:"gray"}}></Box>
      <Box component="div" sx={{display:"flex", justifyContent:"space-between", alignItems:"center", mt:2, flexWrap:"wrap", gap:2}}>
        <Box component="p" width="50%" fontSize="14px" color="gray">© 2025,React Monster , Inc. React Monsters, el logotipo de React Monsters y React Monsters Studios son marcas comerciales o marcas registradas de React Monster, Inc. en Argentina y/o en el resto del mundo. Todos los derechos reservados.</Box>
        <Box component="a" href='#' sx={{background:"#380E00", color:"white", textDecoration:"none", p:"13px", borderRadius:"5px", transition:"all .5s", "&:hover":{backgroundColor:"#8E1616", scrollBehavior:"smooth"}}}>
          Volver al inicio
        </Box>
      </Box>

    </Box>
  )
}

export default Footer