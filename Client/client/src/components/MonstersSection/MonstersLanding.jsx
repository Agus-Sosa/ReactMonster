import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MonsterContainer from './MonsterContainer';
import PageContainer from '../Layout/PageContainer/PageContainer';
import hero_monster from '../../assets/img/hero_bg_monsters.png'
import title_hero from '../../assets/img/Monsters-title.png'
function MonstersLanding() {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#212121',
      }}
    >
    {/* <Box  sx={{width:"100%", display:"flex", alignItems:"center" ,height:{xs:"40vh", md:"40vh", background: `url(${hero_monster})`, backgroundSize:"cover",}}}>
      <PageContainer>
      <Box component='img' src={title_hero} sx={{width:{ xs: "300px", md:"800px"}}} ></Box>

      </PageContainer>
    </Box> */}
      <PageContainer>
        <Box sx={{textAlign:"center", mb:5}}>
           <Box component="h1" sx={{fontSize:"70px", fontWeight:"bold", color:"white", textAlign:"center" ,fontStyle:"italic"}}>
            Engendros
          </Box>
           <Box component="p" sx={{  color:"white", textAlign:"start", fontSize: "24px",  }}>
            Elige a tu compañero entre un sinfín de criaturas. Descubre sus habilidades únicas y domina el arte de la batalla por turnos.
          </Box> 
          </Box>
       
        <MonsterContainer />
      </PageContainer>
    </Box>
  );
}

export default MonstersLanding;