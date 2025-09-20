import { Box } from "@mui/material";
import monsters_categorie from "../../assets/img/monsters_categorie.png";
import PageContainer from "../Layout/PageContainer/PageContainer";
import { Link } from "react-router-dom";

const MonstersSection = () => {
  
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: { xs: "column", md: "row" },
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height:'100vh',
    //     gap: 6,
    //     p: 6,
    //     bgcolor: "#6B0F0F",
    //   }}
    // >
    //   {/* Imagen de monstruos */}
    //   <Box
    //     component="img"
    //     src={monsters_categorie}
    //     alt="Monstruos"
    //     sx={{
    //       width: { xs: "80%", md: "40%" },
    //       maxWidth: 400,
    //       objectFit: "contain",
    //     }}
    //   />

    //   {/* Texto */}
    //   <Box sx={{ maxWidth: 500, textAlign: "left", color: "#F0E6D2" }}>
    //     {/* Título */}
    //     <Box
    //       sx={{
    //         fontWeight: "bold",
    //         fontSize: { xs: "2rem", md: "3rem" }, // escala según pantalla
    //         mb: 2,
    //       }}
    //     >
    //       Engendros
    //     </Box>

    //     {/* Subtítulo */}
    //     <Box
    //       sx={{
    //         fontWeight: "medium",
    //         fontSize: { xs: "0.9rem", md: "1rem" },
    //         mb: 2,
    //       }}
    //     >
    //       La creatividad es tu mayor poder
    //     </Box>

    //     {/* Texto principal */}
    //     <Box
    //       sx={{
    //         /*fontWeight: "bold", */ /* le  quite el bold me gusta mas asi*/ 
    //         fontSize: { xs: "0.95rem", md: "1.1rem" },
    //         lineHeight: 1.6,
    //       }}
    //     >
    //       Más allá de la fuerza bruta, cada monstruo posee habilidades únicas y estilos distintos.{" "}
    //       Dóminalos, personalízalos y crea estrategias para destacar.{" "}
    //       Ningún monstruo luchará igual, y cada enfrentamiento será irrepetible.
    //     </Box>

    //     {/* Botón */}
    //     <MonstersSectionButton
    //       text="Ver todos los engendros"
    //       onClick={handleClick}
    //     />
    //   </Box>
    // </Box>

    <Box sx={{background:"#8E1616"}}>
      <PageContainer>
<Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 5, color: "#E3E0C3" }}>

      <Box
      component='img'
      src={monsters_categorie}
      sx={{width:'490px'}}
      >      </Box>

        <Box sx={{width:'50%', }}>
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

