import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Box } from '@mui/material'
import CardDescPlayer from './DescPlayerCard'
import DescPlayerCard from './DescPlayerCard'

const DescPlayerCardContainer = ({user}) => {
  return (
      <Box sx={{position:"absolute", top:"30%", display:"flex", flexDirection:"column", gap:"10px",left:4, margin:"0 10px"}}>
          <DescPlayerCard data={user.user_name} />
          <DescPlayerCard data={user.range} />
    </Box>
)
}

export default DescPlayerCardContainer