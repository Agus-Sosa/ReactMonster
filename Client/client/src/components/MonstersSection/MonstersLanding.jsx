import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MonsterContainer from './MonsterContainer';
import PageContainer from '../Layout/PageContainer/PageContainer';
function MonstersLanding() {
  return (
    // Contenedor principal de la sección, ocupa todo el ancho
    <Box 
      sx={{ 
        backgroundColor: '#f5f0e1', // Color de fondo que se extiende
        py: 8 // Padding vertical
      }}
    >
      <PageContainer>
        {/* El contenido de la sección, incluyendo el título, queda centrado */}
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: "70px", 
            color: 'white' // Asegúrate de que este color contraste con el fondo
          }}
        >
          Engendros
        </Typography>
        <MonsterContainer />
      </PageContainer>
    </Box>
  );
}

export default MonstersLanding;