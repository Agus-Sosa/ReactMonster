import { Box, Button, Modal } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const ModalAuthPrev = ({openModal, handleCloseModal}) => {

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#212121',
  color:"white",
  border: '1px solid #E3E0C3',
  boxShadow: 24,

};


const styleButton = {
 
  textDecoration: "none",
  p:2
}

  return (
    
  <Modal
        keepMounted
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Button onClick={handleCloseModal} sx={{color:"black", background:"#E3E0C3", position:"absolute", borderRadius:"0px"}}><CloseIcon/></Button>

          <Box sx={{padding:"35px"}}>

          <Box component="h2" sx={{textAlign:'center',mb:"50px"}}>
              Preparate para Jugar
          </Box>
          <Box component="div" sx={{display:"flex", gap:"10px", justifyContent:'center'}}>
              <Button   variant='contained'  sx={{...styleButton, backgroundColor:"#8E1616", color:"white"}}  component={Link} to="/login" >
                  Iniciar Sesion
              </Button>
              <Button variant='contained' sx={{...styleButton, backgroundColor:"#E3E0C3", color:"black"}} component={Link} to="/register">
                  Registrarse
              </Button>
          </Box>
          </Box>

        </Box>
      </Modal>
)
}

export default ModalAuthPrev