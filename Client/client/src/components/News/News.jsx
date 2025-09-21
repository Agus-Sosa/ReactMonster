import React from 'react'
import Box from '@mui/material/Box';
import './news.css'
import NewCard from './NewCard'
import { Icon, useMediaQuery } from '@mui/material';
import NewCarouselMobile from './NewCarouselMobile';
import { useState, useEffect } from 'react';
import PageContainer from '../Layout/PageContainer/PageContainer';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const News = () => {
  const mobile = useMediaQuery('(max-width:1010px)')
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/news/someNews?limit=3")
      .then(res => {
        if (!res.ok) throw new Error("error al cargar noticias");
        return res.json();
      })
      .then(data => {
        setNotices(data);   
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  /* tengo que charlar de esto con agus lo vi en internet me parecio piola */
  if (loading) {
    return <p style={{ color: 'white' }}>cargando noticias...</p>;
  }

  return (     
  <Box
  sx={{
    background: "#E3E0C3",
    color: "white",
    minHeight: { md: "70vh" },
    display: "flex",
    alignItems: "center",
  }}
>
  <PageContainer>
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        component="h3"
        sx={{
          fontSize: { xs: "20px", md: "40px" },
          fontWeight: "bold",
          color: "black",
        }}
      >
        Ultimas noticias
      </Box>

      <Box
        component={Link}
        sx={{
          fontSize: { xs: "14px", md: "20px" },
          textDecoration: "none",
          color: "black",
          display: "flex",
          alignItems: "center",
          gap: "0px",
          transition: "all .5s ease",
          ":hover": { gap: "8px" },
        }}
      >
        <Box
          sx={{
            borderBottom: "solid 0.5px transparent",
            ":hover": { borderColor: "black" },
          }}
        >
          Ir a la pagina de noticias
        </Box>
        <Icon>
          <ArrowRightAltIcon style={{ color: "#380E00" }} />
        </Icon>
      </Box>
    </Box>

    {/* 👇 Aquí la condición */}
    {!mobile ? (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 4,
          mt: 3,
        }}
      >
        {notices.map((notice) => (
          <NewCard
            id={notice.id}
            imageUrl={notice.imageUrl}
            resume={notice.resume}
            title={notice.title}
            key={notice.id}
            date={notice.date}
          />
        ))}
      </Box>
    ) : (
      <NewCarouselMobile inf={notices} /> 
    )}
  </PageContainer>
</Box>

  )                       
}                     
export default News                       