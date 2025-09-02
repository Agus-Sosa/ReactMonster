import "./Foro-landing.css";
import foroImg from "../../../assets/img/foro-title.png";
import Box from '@mui/material/Box';


function LandingForo() {
  return (
    <>
    <Box component='section' className='landing-foro'>
    <img className="foro-img" src={foroImg} alt="Nombre del juego"/> 
    </Box>
    </>
  )
}
export default LandingForo