import { Box, Button, Modal } from '@mui/material'
import React from 'react'

const ModalInputsCrud = ({ open, titleMessage= "Relizar accion",onClose, onConfirm, userRole, inputFields = [], formData, setFormData }) => {
    

    
    if (userRole !== "admin" && userRole !== "superadmin") return null;

     const styleForm= {
    display:"flex",
    flexWrap: "wrap",


  }


  
     const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    };
    
const handleSubmit = (e) => {
  e.preventDefault();
  onConfirm(formData);
  setFormData({}); 
  onClose();
};

const handleCancel = () => {
  setFormData({}); 
  onClose();
  };
  

  return (
 <Modal open={open} onClose={onClose} >
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
        <Box component="h1" sx={{ mb: 3 }}>{ titleMessage}</Box>
            <form  onSubmit={handleSubmit} method='POST' style={styleForm} >
                {inputFields.map((field) => (
                    <Box key={field.name} sx={{display:"flex", flexDirection:"column", width:"100%", mb:2, gap:1}}>

                    <Box component="label" htmlFor={field.name}>
                        {field.label}
                    </Box>
                    <Box component={field.name === "content" ? "textarea" : "input"} sx={{p:0.5, textAlign:'left', height:field.name == "content" ? 300 : 24, border:"solid 0.5px gray",color:"white", outline:"none", borderRadius:1, background:"none"}}   {...(field.name !== "content" && { type: 'text' })} name={field.name} value={formData[field.name]} onChange={handleChange}/>
                                        </Box>

                                        

                ))}
                <Box component="div" sx={{display:"flex", justifyContent:"space-between", mt:3, gap:2}}>
                    <Button type='submit' sx={{backgroundColor:"#8E1616"}} variant="contained" >Crear noticia</Button>
                    <Button sx={{backgroundColor:"#E3E0C3", color:"black"}} onClick={handleCancel} variant='contained'>Cancelar</Button>
                </Box>
            </form>

                
                </Box>

      </Modal>
  )
}

export default ModalInputsCrud