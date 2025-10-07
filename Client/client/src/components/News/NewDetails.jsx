import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageContainer from '../Layout/PageContainer/PageContainer';

const NewDetails = () => {
    const [newDetail, setNewDetail] = useState({});
    const {id}  = useParams();
    const [notNew, setNotNew] = useState(false);
    const navigate =useNavigate();




    
 useEffect(() => {
  const fetchGetNew = async ()=> {
    try {
    const res = await fetch(`http://localhost:8080/news/${id}`);

    if(!res.ok) {
      setNotNew(true);
    } 
    const data = await res.json();
    setNewDetail(data.new);
    } catch (error) {
      console.log(error);
      setNotNew(true);
    }
    
  }
  fetchGetNew();
}, [id]) 


if(notNew) navigate('*');

const d = new Date(newDetail.date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  const fechaFormateada = `${day}/${m}/${y}`


const styleImage = {
  width: { xs: "50vh", md: "120vh" },
  height: { xs: "40vh", md: "70vh" },
  borderRadius: 2,
  objectFit: "cover",   // 🔹 mantiene proporciones y recorta si sobra
  display: "block",
};



return (
    <Box sx={{}}>
        <PageContainer>
    <Box sx={{display:"flex", justifyContent:"center",flexDirection:"column", alignItems:'center', color:"white", my:3}}>

        <Box component="header" sx={{textAlign:'start', width:{ xs:"100%", md:"50%"}}}>
            <Box sx={{color:"gray", fontSize:{ xs:"14px", md:"14px"}}}>{fechaFormateada}</Box>
        </Box>
  {newDetail?.imageUrl && (
    <Box
      component="img"
      src={newDetail.imageUrl}
      alt={newDetail.title || "imagen"}
      sx={{
        width: { xs: "100%", md: "75%" }, // mejor que vh
        height: "auto", // mantiene proporción
        borderRadius: {xs:0,md:2},
        objectFit: "cover" 
      }}
    />
  )}
        <Box component="div" sx={{width:{ xs:"100%", md:'50%'}}}>
          <Box component="h1" sx={{fontSize:{xs:'25px', md:"40px"}, fontWeight:"bold", my:3}}>
              {newDetail.title}
          </Box>
            <Box mt={5}>
                {newDetail?.content?.paragraphs?.map((p, index) => (
                <Box sx={{fontSize:{xs:'16px', md:"20px"}}} key={index} mb={1}>
                    {p}
                </Box>
                ))}
            </Box>        
  
  </Box>
    </Box>

        </PageContainer>

    </Box>
  )
}

export default NewDetails