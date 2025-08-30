import Box from '@mui/material/Box'
import title_game from '../assets/img/title_game.png'
import Button from '@mui/material/Button'
const Footer = () => {
  return (
    <Box component="footer" sx={{backgroundColor:"#1E1E1E", color:"white"}}>
      <Box component="img" sx={{width:"100px"}} src={title_game} alt=""/>
      <Box component="br"/>
      <Box>
        <Box component="p" >© 2025,React Monster , Inc. React Monsters, el logotipo de React Monsters y React Monsters Studios son marcas comerciales o marcas registradas de React Monster, Inc. en Argentina y/o en el resto del mundo. Todos los derechos reservados.</Box>
        <Box component="a" href='#'>
          Volver al inicio
        </Box>
      </Box>

    </Box>
  )
}

export default Footer