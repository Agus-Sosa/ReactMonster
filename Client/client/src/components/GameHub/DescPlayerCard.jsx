import { Box } from '@mui/material'
import React from 'react'

const DescPlayerCard = ({data}) => {
  return ( 
      <Box sx={{color:"darkgray", background:"#1e1e1e98",p:1,borderRadius:2, border:"solid 2px #313131ff"}}>
          {data}
    </Box>
  )
}

export default DescPlayerCard