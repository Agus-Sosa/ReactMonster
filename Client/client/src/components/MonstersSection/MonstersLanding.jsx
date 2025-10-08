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
    <Box  sx={{width:"100%", display:"flex", alignItems:"center" ,height:{xs:"40vh", md:"40vh", background: `url(${hero_monster})`, backgroundSize:"cover",}}}>
      <PageContainer>
      <Box component='img' src={title_hero} sx={{width:{ xs: "300px", md:"500px"}}} ></Box>

      </PageContainer>
    </Box> 
  
      <PageContainer>
        <MonsterContainer />
      </PageContainer>
    </Box>
  );
}

export default MonstersLanding;