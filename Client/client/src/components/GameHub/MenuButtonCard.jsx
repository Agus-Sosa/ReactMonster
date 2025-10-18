import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuButtonCard = ({title, image, link }) => {
  return (
      <Box component={Link} to={link} sx={{border:"solid 1px gray",background:`url(${image})`, minHeight:"200px", minWidth:"300px", backgroundSize:"cover", backgroundPosition:"center", display:"flex", justifyContent:"center", alignItems:"end", textDecoration:"none", color:"#fff", fontSize:"24px", fontWeight:"bold", borderRadius:"8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", transition: "transform 0.2s", '&:hover': { transform: "scale(1.05)" }, padding:2}}>
          <Box>
            {title}
        </Box>
      </Box>
  
  )
}

export default MenuButtonCard