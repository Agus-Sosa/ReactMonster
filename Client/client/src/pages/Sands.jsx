import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import Card_Sand from '../components/Sands/Card_Sand'
import arenas from '../components/Sands/arenas_list'
import Box from '@mui/material/Box';
import React from 'react'

const Sands = () => {
  
  return (
    <div style={{
    backgroundColor: '#212121'}}>
        <Header/>
        <Box sx={{color: "#E3E0C3", fontFamily:"Anton", fontSize:"40px", flexBasis: '100%', textAlign: 'left', marginLeft: '140px'}}>
        <h1>Arenas</h1>
         </Box>
         <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center' 
      }}
    >
        {arenas.map((arena)=>(
          <Box
            key={arena.id}
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 2
            }}
            >
          <Card_Sand arena={arena}/>
          </Box>
        ))}
        </Box>
        <Footer/>
    </div>
  )
}

export default Sands