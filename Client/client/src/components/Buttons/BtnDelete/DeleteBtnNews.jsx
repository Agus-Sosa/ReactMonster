import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';

const DeleteBtnNews = ({ onDelete, userRole, open, onClose }) => {
  if (userRole !== 'admin' && userRole !== 'superadmin') return null;

  const handleDelete = () => {
    onDelete();
  };

  const handleCancel = () => {
    onClose();
  };

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
          Borrar noticia
        </Typography>

        <Typography sx={{ mb: 3 }}>
          ¿Estás seguro de que deseas eliminar esta noticia? Esta acción no se puede deshacer.
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Eliminar
          </Button>
          <Button variant="outlined" onClick={handleCancel}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteBtnNews;
