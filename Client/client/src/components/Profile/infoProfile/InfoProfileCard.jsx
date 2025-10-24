import { Box, Typography } from '@mui/material'
import React from 'react'

const InfoProfileCard = ({title, detail}) => {
  return (
    <Box sx={{
      border: "solid 1px #3f3f3f",
      p: 2,
      minHeight: "150px",
      minWidth: "150px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 1,
      borderRadius: 2,
      backgroundColor: '#1e1e1e',
      transition: 'border-color 0.3s ease, transform 0.3s ease',
      '&:hover': {
        borderColor: '#5a5a5aff',
      }
    }}>
      <Typography variant="body1" sx={{ color: "grey.500", textTransform: 'capitalize' }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ color: "white", fontWeight: 'bold' }}>
        {detail}
      </Typography>
    </Box>
  )
}

export default InfoProfileCard