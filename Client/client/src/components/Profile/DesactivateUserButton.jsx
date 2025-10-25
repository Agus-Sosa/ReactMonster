import { Button } from '@mui/material';
import React from 'react'
import ModalConfirm from '../Buttons/ModalCrud/ModalConfirm';

const DesactivateUserButton = ({onDeleteUser, user,onOpen,  onClose, open, userId}) => {

    const userRole = user?.role;


    if (!userRole || (userRole !== "admin" && userRole !== "superadmin") ||user?.id == userId ) return null;
    
    

    const handleDelete = async () => {
        onDeleteUser();
    }   

    const handleClose = async () => {
        onClose();
    }





    return (
        <>
        <Button onClick={onOpen}>
            Eliminar Usuario
            </Button>
            <ModalConfirm onConfirm={handleDelete} onClose={handleClose} open={open}   />
        </>
  )
}

export default DesactivateUserButton