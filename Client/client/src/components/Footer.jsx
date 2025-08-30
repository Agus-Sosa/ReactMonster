import Box from '@mui/material/Box'
import title_game from '../assets/img/title_game.png'
import Button from '@mui/material/Button'
const Footer = () => {
  return (
    <Box>
      <img src={title_game} alt="" />
      <Box>
        <p>© 2025,React Monster , Inc. React Monsters, el logotipo de React Monsters y React Monsters Studios son marcas comerciales o marcas registradas de React Monster, Inc. en Argentina y/o en el resto del mundo. Todos los derechos reservados.</p>
        <Button>
          Volver al inicio
        </Button>
      </Box>

    </Box>
  )
}

export default Footer