import { Box } from '@mui/material'
import { Link } from 'react-router-dom';
import hero_card_monster from '../../assets/img/monsters/hero_card_monster.png'

const MonstersCard = ({ id, name, image }) => {
  return (
    <Box
      sx={{
        width: { xs: "200px", md: "350px" },
        height: { xs: "300px", md: "600px" },
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        borderRadius: "10px",
      }}
      component={Link}
      to={`/monsters/${id}`}
    >
      <Box
        sx={{
          backgroundImage: `url(${hero_card_monster})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          transition: "transform .5s ease",
          zIndex: 1,
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
      />

      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          position: "absolute",
          top: "14%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "auto",
          zIndex: 2,
          transition: "transform .3s ease",
          "&:hover": {
            transform: "translateX(-50%) scale(1.05)",
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: "start",
          padding: 2,
          background: "#E3E0C3",
          fontWeight: 'bold',
          color: "black",
          zIndex: 3,
          fontSize: { xs: "14px", md: '20px' },
        }}
      >
        {name}
      </Box>
    </Box>
  )
}

export default MonstersCard;
