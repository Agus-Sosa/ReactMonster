import { Avatar, Box, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageContainer from '../Layout/PageContainer/PageContainer';
import { AuthContext } from '../../context/AuthContext';
import DeleteBtnModal from '../Buttons/BtnDelete/DeleteBtnModal';
import UpdateBtn from '../Buttons/BtnUpdate/UpdateBtn';
import UpdateBtnModal from '../Buttons/BtnUpdate/UpdateBtnModal';

const NewDetails = () => {
  const { user, token } = useContext(AuthContext);
  const [newDetail, setNewDetail] = useState({});
  const { id } = useParams();
  const [notNew, setNotNew] = useState(false);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);


 

  const handleClose = () => {
    setOpenModal(false);
  }
  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleOpenUpdateModal = () => {
    setOpenModalUpdate(true);
  }

  const handleCloseUpdateModal = () => {
    setOpenModalUpdate(false);
  }


    
  useEffect(() => {
    const fetchGetNew = async () => {
      try {
        const res = await fetch(`http://localhost:8080/news/${id}`);

        if (!res.ok) {
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
  
  const imageSrc = newDetail?.imageUrl?.startsWith('http')
    ? newDetail.imageUrl
    : `http://localhost:8080${newDetail.imageUrl}`;
  
  const handleDelete = async () => {
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

  const initialFieldInputs = {
    title: newDetail.title || '',
    imageUrl: newDetail.imageUrl || '',
    resume: newDetail.resume || '',
    content: newDetail.content || '',
  }
  
  const inputsFields = [
    { label: "Título", name: "title", type: "text", required: true },
    { label: "Imagen (URL)", name: "imageUrl", type: "url", required: false },
    { label: "Resumen", name: "resume", type: "text", required: true },
    { label: "Contenido", name: "content", type: "text", required: true },
    
  ]

  const handleUpdate = async(updatedNew) => { 
    try { 

      const res = await fetch(`http://localhost:8080/news/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        ,
        method: "PUT",
        body: JSON.stringify(updatedNew)
      })
      


      if (!res.ok) { 
        console.log("Error al actualizar la noticia");
        return;
      }

      const data = await res.json();
      setNewDetail(data.updatedNew);

    }
    catch (error) { }
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
  objectFit: "cover",   
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
      src={imageSrc}
      alt={newDetail.title || "imagen"}
      sx={{
        width: { xs: "100%", md: "75%" }, 
        height: "auto", 
        borderRadius: {xs:0,md:2},
        objectFit: "cover" 
      }}
    />
  )}
        <Box component="div" sx={{ width: { xs: "100%", md: '50%' } }}>
          <Box sx={{display:'flex', alignItems:'center', gap:1, mt:3, mb:1}}>

          { user && (user.role === 'admin' || user.role === 'superadmin') &&
          <Button variant="contained" color="error"  onClick={handleOpenModal}>
            Eliminar
          </Button>
           }
            <UpdateBtn onClick={handleOpenUpdateModal} userRole={user?.role} />
            </Box>
          <DeleteBtnModal onDelete={handleDelete} userRole={user?.role} onClose={handleClose} open={openModal} />
          <UpdateBtnModal onClose={handleCloseUpdateModal} open={openModalUpdate } onUpdate={handleUpdate} initFieldsData={initialFieldInputs} userRole={user?.role} inputFields={inputsFields}/>
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