import React from 'react'
import Box from '@mui/material/Box';
import './news.css'
import NewCard from './NewCard'
import noticias from './informacionNot'

const News = () => {
  return (
    <Box
      sx={{
        backgroundColor:'#380E00',
        minHeight: '100vh',            
        display: 'flex',
        flexDirection: 'column',       
        justifyContent: 'center',      
        alignItems: 'center',          
        gap: 5,                        
        padding: 2                      
      }}
    >
      
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1 className='ultimate-news'>Ultimas noticias</h1>
        <button className='news-button'>Ver más noticias</button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',         
          justifyContent: 'center',
          gap: 4,
          width: '100%',             
          maxWidth: 1200             
        }}
      >
        {noticias.map((inf) => (
          <Box
            key={inf.id}
            sx={{
              flex: '1 1 300px',     
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <NewCard inf={inf} />
          </Box>
        ))}
      </Box>
    </Box>
  
  )
}

export default News