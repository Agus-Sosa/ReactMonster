import { Button } from '@mui/material';
import React from 'react'
import ModalConfirm from '../Buttons/ModalCrud/ModalConfirm';

const DesactivateUserButton = ({onDeleteUser, myUser,onOpen,  onClose, open, userView}) => {
    const userRole = myUser?.role;


    if (!userRole || (userRole !== "admin" && userRole !== "superadmin") ||myUser?.id == userView.id_user  || userView.count_state === false) return null;
    
 

    const handleClose = async () => {
        onClose();
    }


    return (
        <>
        <Button onClick={onOpen} variant='contained' color='error'>
            Eliminar Usuario
            </Button>
            <ModalConfirm onConfirm={onDeleteUser} onClose={handleClose} open={open}   />
        </>
  )
}

export default DesactivateUserButton