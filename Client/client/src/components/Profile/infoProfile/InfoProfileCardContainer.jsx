import { Box } from '@mui/material'
import React from 'react'
import InfoProfileCard from './infoProfileCard'
const InfoProfileCardContainer = ({info}) => {
  return (
      <Box sx={{display:"flex", gap:2}}>
          {
              info.map(inf => (
                  <InfoProfileCard key={inf.title} title={inf.title} detail={inf.detail} />
              ))
          }
    </Box>
)
}

export default InfoProfileCardContainer