import { Box } from "@mui/material";
import monsters_categorie from "../../assets/img/monsters_categorie.png";
import PageContainer from "../Layout/PageContainer/PageContainer";
import { Link } from "react-router-dom";

const MonstersSection = () => {
  
  return (
    
    <Box sx={{background:"#8E1616" , minHeight:"80vh"}}>
    <PageContainer>
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 5, color: "#E3E0C3" }}>

      <Box component='img'src={monsters_categorie} sx={{width: { xs: 260, md: 480 },}}/>

        <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: "center", md: "left" } }}>
          <Box component="h1" sx={{fontSize:'70px'}}>Engendros</Box>
          <Box component="h5" sx={{fontSize:'23px'}}> La creatividad es tu mayor poder</Box>
          <Box component='p' sx={{my:2}}>Más allá de la fuerza bruta, cada monstruo posee habilidades únicas y estilos distintos. Domínalos, personalízalos y crea estrategias para destacar. Ningún monstruo luchará igual, y cada enfrentamiento será irrepetible.</Box>
          <Box 
            component={Link} 
            to="/monsters"
            sx={{ 
              background: 'black', 
              padding: 2, 
              textAlign: "center",
              color: 'white',
              textDecoration: 'none',
              display: 'inline-block',
              transition:'.5s all',
              fontWeight:"bold",
              ":hover":{background:"white", color:"black"}
            }}
          >
            Ver todos los Engendros
          </Box>
        </Box>
        </Box>

      </PageContainer>

    </Box>
  );
};

export default MonstersSection;

