import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'

const ModalConfirm = ({ open, onConfirm , onClose }) => {

  

  return (
 <Modal open={open} onClose={onClose}>
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
          color: "white",
          p: 4,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Borrar elemento
        </Typography>

        <Typography sx={{ mb: 3 }}>
          ¿Estás seguro de que deseas eliminar esto? Esta acción no se puede deshacer.
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="contained" color="error" onClick={onConfirm }>
            Eliminar
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>  )
}

export default ModalConfirm