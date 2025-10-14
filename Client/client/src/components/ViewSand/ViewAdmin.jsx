import { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer'
import CardAdmin from './CardAdmin'
import Box from '@mui/material/Box';
import iconoArena from '../../assets/img/arenas/iconoArena.png'
import tituloArena from '../../assets/img/arenas/tituloArena.png'
import "../Sands/arena.css"
import Loading from "../LoadingComp/Loading"


const ViewAdmin = () => {
  const [arenas,setArenas]=useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    fetch("http://localhost:8080/arenas")
      .then(res=>{
        if(!res.ok) throw new Error ("error al cargar arenas");
          return res.json();
      })
      .then(data=>{
        setArenas(data.arenas);
        setLoading(false);
      })
      .catch(err=>{
        console.error(err);
        setLoading(false);
      })
    },[]);

    
    if (loading){
      return (
      <Loading/>
      )
    }
  
  return (
    <div style={{
    backgroundColor: '#212121'}}>
        <section className='hero'>
        <Box sx={{
          color: "#E3E0C3",
          fontFamily:"Anton",
          fontSize:{ xs: "20px", sm: "30px", md: "40px" }, 
          flexBasis: '100%',
          textAlign:{ xs: "center", md: "left" }, 
          ml: { xs: 0, md: 14 }, 
          display:'flex',
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: 'center',}}>
        <img 
        src={tituloArena}
         alt="titulo"
          style={{
            maxWidth: "100%",  
            height: "auto",    
            maxHeight: "350px" 
          }}/>
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
        
          
          <Box
            
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 2
            }}
            >
          {arenas.map((arena) => (
            <div key={arena.id}>
              <CardAdmin arena={arena} />
            </div>
          ))}

       </Box>
        
        </Box>
        {/* <CardAdmin/> */}
    </div>
  )
}

export default ViewAdmin



