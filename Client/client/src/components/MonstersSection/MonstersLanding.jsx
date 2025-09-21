import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MonsterContainer from './MonsterContainer';
import PageContainer from '../Layout/PageContainer/PageContainer';
function MonstersLanding() {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#212121',
        py: 8 
      }}
    >
      <PageContainer>
        <Box sx={{textAlign:"center", mb:5}}>
          <Box component="h1" sx={{fontSize:"70px", fontWeight:"bold", color:"white", textAlign:"center" ,fontStyle:"italic"}}>
            Engendros
          </Box>
          <Box component="p" sx={{  color:"white", textAlign:"center" }}>
            Elige a tu compañero entre un sinfín de criaturas. Descubre sus habilidades únicas y domina el arte de la batalla por turnos.
          </Box>
          </Box>
       
        <MonsterContainer />
      </PageContainer>
    </Box>
  );
}

export default MonstersLanding;