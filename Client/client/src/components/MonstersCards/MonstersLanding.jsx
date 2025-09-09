
import './MonstersLanding.css';
import MonstersImg from '../../assets/img/Monsters-title.png';
import Box from '@mui/material/Box';


function MonstersLanding() {
  return (
    <>
    <Box component='section' className='landing-Monsters'>
    <img className="monsters-img" src={MonstersImg} alt="Engendros"/> 
    </Box>
    </>
  )
}
export default MonstersLanding