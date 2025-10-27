import { Button } from '@mui/material';
import React from 'react'
import ModalConfirm from '../Buttons/ModalCrud/ModalConfirm';

const DesactivateUserButton = ({onDeleteUser, myUser,onOpen,  onClose, open, userView}) => {
    const hasAdminPermissions = myUser?.role === "admin" || myUser?.role === "superadmin";
    
    const isViewingOwnProfile = myUser?.id === userView?.id;

    const isUserInactive = userView?.count_state === false;

    if (!hasAdminPermissions || isViewingOwnProfile || isUserInactive) {
        return null;
    }


    return (
        <>
        <Button onClick={onOpen} variant='contained' color='error'>
            Eliminar Usuario
            </Button>
            <ModalConfirm onConfirm={onDeleteUser} onClose={onClose} open={open}   />
        </>
  )
}

export default DesactivateUserButton