import { Box, Avatar } from "@mui/material";
import arena_home from "../../assets/img/arena_home.png";
import PageContainer from "../Layout/PageContainer/PageContainer";
import { Link } from "react-router-dom";

const ArenaSection = () => {
  return (
    <Box sx={{ background: "#E8E3CE", py: { xs: 2, md: 5 },height:{ md:"80vh"}, display:'flex', alignItems:"center" }}>
      <PageContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 4, md: 6 },
            color: "#3B1F0B",
          }}
        >
         
          <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: "left", md: "left" } }}>
            <Box component="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: "bold", mb: 2 }}>
              ARENAS
            </Box>
            <Box component="h5" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, fontWeight: 600, mb: 2 }}>
              Lucha por turnos en todo el mundo
            </Box>
            <Box component="p" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.6, mb: 3 }}>
              Cada arena es un escenario estratégico donde podrás demostrar tu ingenio y planificar jugadas únicas. Están diseñadas para combates por turnos, tácticas inteligentes y momentos memorables. ¡Haz la jugada que otros recordarán y querrán imitar!
            </Box>

            <Box
              component={Link}
              to="/arenas"
              sx={{
                background: "#3B1F0B",
                padding: 2,
                textAlign: "center",
                color: "white",
                textDecoration: "none",
                display: "inline-block",
                fontWeight: "bold",
                transition: ".3s all",
                ":hover": { background: "white", color: "#3B1F0B" },
              }}
            >
              Ver todas las Arenas
            </Box>
          </Box>
            <Avatar
            src={arena_home}
            alt="Arena"
            sx={{
              width: { xs: 260, md: 480 },
              height: { xs: 260, md: 480 },
              borderRadius: "50%",
              boxShadow: 4,
              border: "4px solid #3B1F0B",
            }}
          />
        </Box>
      </PageContainer>
    </Box>
  );
};

export default ArenaSection;
