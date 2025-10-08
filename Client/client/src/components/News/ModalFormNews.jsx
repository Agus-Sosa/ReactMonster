import { Box, Button, Input, Modal } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { Form } from 'react-router-dom';

export const ModalFormNews = ({isOpen, closeModal, adminId, refreshNews}) => {
     const [formData, setFormData]= useState({
        title: "",
        content: "",
        imageUrl: "",
        id_admin: adminId,
        resume: "",        
    })
    const [error, setError]= useState({});

    console.log("formadata:",formData);



    const inputFields = [
    { label: "Título", name: "title", type: "text", required: true },
    { label: "Imagen (URL)", name: "imageUrl", type: "url", required: false },
    { label: "Resumen", name: "resume", type: "text", required: true },
    { label: "Contenido", name: "content", type: "text", required: true },

    ];


    const hanldeOnSubmit = async(e)=> {
        try {
            e.preventDefault()
            const res = await fetch("http://localhost:8080/news/createNew", {
                  headers: { "Content-Type": "application/json" },

                method:"POST",
                body: JSON.stringify(formData)
            })

            console.log("respues", res)
            if(!res.ok) {

            }
            
            const data = await res.json();
            console.log(data)
            refreshNews();
            closeModal();
            

        } catch (error) {
            console.log(error)
        }
    }

    

      const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
        ...formData,
        [name]: value,
    });
    setError((prev)=> ({...prev, [name]: false}))
  };

  const handleCancel =( )=> {
    closeModal();
    setFormData({
        title:"",
        content:"",
        imageUrl:"",
        id_admin: adminId,
        resume:"",
    })
  }

 const styleForm= {
    display:"flex",
    flexWrap: "wrap",

  }

  if(!isOpen) return null;

  return (
<>
 <Modal open={isOpen} onClose={closeModal} >
    <Box
        
               sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "#212121",
          borderRadius: 2,
          boxShadow: 24,
          color:"white",
          p: 4,
        }}
 
    >
            <Box component="h1" sx={{mb:3}}>Crear nueva noticia</Box>
            <form onSubmit={hanldeOnSubmit} method='POST' style={styleForm} >
                {inputFields.map((field) => (
                    <Box key={field.name} sx={{display:"flex", flexDirection:"column", width:"100%", mb:2, gap:1}}>

                    <Box component="label" htmlFor={field.name}>
                        {field.label}
                    </Box>
                    <Box component={field.name === "content" ? "textarea" : "input"} sx={{p:0.5, textAlign:'left', height:field.name == "content" ? 300 : 24, border:"solid 0.5px gray",color:"white", outline:"none", borderRadius:1, background:"none"}}   {...(field.name !== "content" && { type: 'text' })} name={field.name} value={formData[field.name]} onChange={handleChange}/>
                                        </Box>

                                        

                ))}
                <Box component="div" sx={{display:"flex", justifyContent:"space-between", mt:3}}>
                    <Button type='submit' sx={{backgroundColor:"#8E1616"}} variant="contained">Crear noticia</Button>
                    <Button sx={{backgroundColor:"#E3E0C3", color:"black"}} onClick={handleCancel} variant='contained'>Cancelar</Button>
                </Box>
            </form>

                
                </Box>

        </Modal>
</>
  )
}
