import React from 'react'
import Box from '@mui/material/Box';
import './news.css'
import NewCard from './NewCard'
import { useMediaQuery } from '@mui/material';
import NewCarouselMobile from './NewCarouselMobile';
import { useState, useEffect } from 'react';

const News = () => {
  const mobile = useMediaQuery('(max-width:1010px)')
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/news/someNews?limit=6")
      .then(res => {
        if (!res.ok) throw new Error("error al cargar noticias");
        return res.json();
      })
      .then(data => {
        setNoticias(data);   
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p style={{ color: 'white' }}>cargando noticias...</p>;
  }

  return (
    <Box
      sx={{
        backgroundColor:'#380E00',
        minHeight: '60vh',            
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
          justifyContent: 'center',   
          gap: 4,   
          width: '100%',                
          maxWidth: 1200                
        }}   
      >   

        <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width:"100%",
          color:"white"
          
        }}
      >
        <h1 className='ultimate-news'>Ultimas noticias</h1>
        <button className='news-button'>Ver más noticias</button>
      </Box>
      {   
        !mobile ? (   
          
        noticias.slice(-3).map((inf) => (
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
        ))

      ) : (
        <NewCarouselMobile inf={noticias}/>                       
      ) }                       
          </Box>

    </Box>                    
  )                       
}                     
export default News                       