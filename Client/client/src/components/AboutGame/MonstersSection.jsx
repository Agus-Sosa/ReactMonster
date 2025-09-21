import { Box } from "@mui/material";
import monsters_categorie from "../../assets/img/monsters_categorie.png";
import PageContainer from "../Layout/PageContainer/PageContainer";
import { Link } from "react-router-dom";

const MonstersSection = () => {
  
  return (
    
    <Box sx={{background:"#8E1616" , minHeight:{xs:'100vw', md:"80vh"}, py:3}}>
    <PageContainer>
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: {xs:2, md:5}, color: "#E3E0C3" }}>

      <Box component='img'src={monsters_categorie} sx={{width: { xs: 260, md: 480 },}}/>

        <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: "left", md: "left" } }}>
          <Box component="h1" sx={{fontSize:{ xs: "2.5rem", md: "3.5rem" }}}>Engendros</Box>
          <Box component="h5" sx={{fontSize:{ xs: "1.2rem", md: "1.5rem" }}}> La creatividad es tu mayor poder</Box>
          <Box component='p' sx={{my:2, fontSize:{ xs: "1rem", md: "1.1rem" }}}>Más allá de la fuerza bruta, cada monstruo posee habilidades únicas y estilos distintos. Domínalos, personalízalos y crea estrategias para destacar. Ningún monstruo luchará igual, y cada enfrentamiento será irrepetible.</Box>
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

