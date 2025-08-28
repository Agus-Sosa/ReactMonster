import Box from '@mui/material/Box';
import titleGame from '../assets/img/title_game.png'
const Header = () => {
  return (
      <Box sx={{flex: 1,  }}>
<Box
  component="img"
  sx={{
    height: 233,
    width: 350,
    maxHeight: { xs: 233, md: 167 },
    maxWidth: { xs: 350, md: 250 },
  }}
  alt="Descripción de la imagen."
  src={miImagen}
/>      </Box>
)
}

export default Header