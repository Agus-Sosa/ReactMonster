import Box from '@mui/material/Box'
import title_game from '../assets/img/title_game.png'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
const Footer = () => {
  const mobile = useMediaQuery('(max-width:600px)')
  return (
    <Box component="footer" sx={{backgroundColor:"#1e1e1e", color:"white", m:"auto", px:mobile ? 3 : 10 , py:5 }}>
      <Box component="img" sx={{width:"100px"}} src={title_game} alt=""/>
      <Box component="div" sx={{ width:"100%", py:"0.5px", my:"20px", background:"gray"}}></Box>
      <Box component="div" sx={{display:mobile ? "flex" : "flex", justifyContent:"space-between", alignItems:"center", mt:2, flexWrap:"wrap", gap:2}}>
        <Box component="p" fontSize="14px" color="gray" sx={{width:mobile ? "100%" :"50%", gap:"20px"}}>© 2025,React Monster , Inc. React Monsters, el logotipo de React Monsters y React Monsters Studios son marcas comerciales o marcas registradas de React Monster, Inc. en Argentina y/o en el resto del mundo. Todos los derechos reservados.</Box>
        <Box component="a" href='#' sx={{background:"#380E00", color:"white", textDecoration:"none", p:"13px", borderRadius:"5px", transition:"all .5s", "&:hover":{backgroundColor:"#8E1616", scrollBehavior:"smooth"}}}>
          Volver al inicio
        </Box>
      </Box>

    </Box>
  )
}

export default Footer