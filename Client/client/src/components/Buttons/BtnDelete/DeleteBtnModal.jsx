import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import ModalConfirm from '../ModalCrud/ModalConfirm';


// Este componente puede ser reutilizable en cualquier lugar donde se necesite un modal de confirmación de eliminación 👟
const DeleteBtnModal = ({ onDelete, userRole, open, onClose }) => {
  if (userRole !== 'admin' && userRole !== 'superadmin') return null;

  const handleDelete = () => {
    onDelete();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <ModalConfirm  onConfirm={handleDelete} onClose={handleCancel} open={open}/>
  );
};

export default DeleteBtnModal;
