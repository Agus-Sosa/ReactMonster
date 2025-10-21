import { Avatar, Box, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageContainer from '../Layout/PageContainer/PageContainer';
import { AuthContext } from '../../context/AuthContext';
import DeleteBtnModal from '../Buttons/BtnDelete/DeleteBtnModal';

const NewDetails = () => {
  const { user, token } = useContext(AuthContext);
  console.log("user en NewDetails:", user);
    const [newDetail, setNewDetail] = useState({});
    const {id}  = useParams();
    const [notNew, setNotNew] = useState(false);
    const navigate =useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => { 
    setOpenModal(false);
  }
  const handleOpenModal = () => { 
    setOpenModal(true);
  }



    
 useEffect(() => {
  const fetchGetNew = async ()=> {
    try {
    const res = await fetch(`http://localhost:8080/news/${id}`);

    if(!res.ok) {
      setNotNew(true);
      return;
    } 
    const data = await res.json();
    setNewDetail(data.new);
    } catch (error) {
      console.log(error);
      setNotNew(true);
    }
    
  }
  fetchGetNew();

 }
   , [id]) 
  const handleDelete =async () => { 
      try {
        const res = await fetch(`http://localhost:8080/news/${id}`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          method: "DELETE",
        })

        if (!res.ok) {
          console.log("Error al eliminar la noticia");
          return;
        }
        navigate('/allnews');


      } catch (error) {
        console.log(error)
      }
  }

console.log("newDetail:", newDetail)

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

        <Box component="header" sx={{ textAlign: 'start', width: { xs: "100%", md: "50%" } }}>
          <Box sx={{display:"flex", gap:2, alignItems:"center", marginBottom:2}}>
            <Avatar alt="Remy Sharp" sx={{ width: { md: 60 }, height: { md:60} }} src={newDetail?.User?.profile_picture} />
            <Box>
              { newDetail?.User?.user_name}
            </Box>
            </Box>
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
        <Box component="div" sx={{ width: { xs: "100%", md: '50%' } }}>
          { user && (user.role === 'admin' || user.role === 'superadmin') &&
          <Button variant="contained" color="error" sx={{mt:3, mb:1}} onClick={handleOpenModal}>
            Eliminar
          </Button>
           }
          <DeleteBtnModal onDelete={handleDelete} userRole={user?.role} onClose={handleClose} open={openModal} />
          <Box component="h1" sx={{ fontSize: { xs: '25px', md: "40px" }, fontWeight: "bold", my: 3, whiteSpace: 'pre-line', lineHeight: 1.6, }}>
              {newDetail.title}
          </Box>
            <Box mt={3} sx={{fontSize: '20px', whiteSpace: 'pre-line', lineHeight: 1.6,}}>
                {newDetail?.content}
            </Box>        
  
  </Box>
    </Box>

        </PageContainer>

    </Box>
  )
}

export default NewDetails