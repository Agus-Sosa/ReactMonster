import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const MonstersCard = ({id, name, image}) => {
  return (
    
   <Box 
  sx={{
    width: "350px", 
    height: "600px", 
    overflow: "hidden", 
    position: "relative" 
  }} 
  component={Link} 
  to={`/monster/${id}`}
>
  <Box
    sx={{
      backgroundImage: `url(${image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100%",
      height: "100%",
      transition: "transform .5s ease", 
      "&:hover": {
        transform: "scale(1.2)", 
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
      textDecoration: "none",
      padding: 2,
      background: "#E3E0C3", 
      fontWeight:'bold',
      color: "black",
      zIndex: 2,
      fontSize:'20px',
      
    }}
  >
    {name}
  </Box>
</Box>
  )
}

export default MonstersCard;
