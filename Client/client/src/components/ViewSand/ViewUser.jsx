import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import tituloArena from '../../assets/img/arenas/tituloArena.png'
import "../Sands/arena.css"
import Loading from "../LoadingComp/Loading"
import CardUser from './CardUser';
import AddArena from './AddArena';


const ViewUser = () => {
  // create the states and initialize them
  // creo los estados y los inicializo

  const [arenas,setArenas]=useState([]);
  const [loading, setLoading] = useState(true)

  //function that is used to render the sands brought from the back
  
  const fetchArenas = () => {
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
  }
  //every time sand is modified the component is rendered
  useEffect(()=>{
    fetchArenas()
    },[arenas]);

    
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
          
          {/* I map the arenas and depending on the user's role I show the AddArena component */}
          
          <AddArena fetchArenas={fetchArenas} />
          {arenas.map((arena) => (
            <div key={arena.id}>
              <CardUser arena={arena} fetchArenas={fetchArenas} />
            </div>
          ))}
          </Box>
        
        </Box>
    </div>
  )
}

export default ViewUser