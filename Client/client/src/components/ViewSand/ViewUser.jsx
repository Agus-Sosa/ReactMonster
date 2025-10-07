import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import CardUser from './CardUser'
import Box from '@mui/material/Box';
import iconoArena from '../assets/img/arenas/iconoArena.png'
import tituloArena from '../assets/img/arenas/tituloArena.png'
import "../components/Sands/arena.css"
import Loading from '../components/LoadingComp/Loading';
// import { data } from 'react-router-dom'




const ViewUser = () => {

  const [arenas,setArenas]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect( () => {
    fetch("http://localhost:8080/arenas")
      .then (res => {
        if (!res.ok) throw new Error("error al cargar las arenas");
        return res.json();
      })
      .then (data=> {
        setArenas(data.arenas);
        setLoading(false);
      })
      .catch (err => {
        console.error(err);
        setLoading(false);
      })
  }, [])

  if (loading) {
      return (
        <Loading/>
      );
    }

  
  return (
    <div style={{
    backgroundColor: '#212121'}}>
        <section className='hero'>
        <Box sx={{
          color: "#E3E0C3",
          fontFamily:"Anton",
          fontSize:{ xs: "20px", sm: "30px", md: "40px" }, // tipografía que escala
          flexBasis: '100%',
          textAlign:{ xs: "center", md: "left" }, // en cel centrado, en desktop a la izq
          ml: { xs: 0, md: 14 }, // margen izq solo en desktop
          display:'flex',
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: 'center',}}>
        <img 
        src={tituloArena}
         alt="titulo"
          style={{
            maxWidth: "100%",  // se adapta al ancho del contenedor
            height: "auto",    // mantiene proporción
            maxHeight: "350px" // opcional: límite máximo
          }}/>
        {/* <img src={iconoArena} alt="espadas" height={'350px'} width={'500px'}  style={{ backgroundColor: 'transparent' }}/> */}
         </Box>
         </section>
         <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
        marginTop:'40px',
        marginBottom:'40px',
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
          <CardUser arena={arena}/>
          </Box>
        ))}
        </Box>
    </div>
  )
}

export default ViewUser




