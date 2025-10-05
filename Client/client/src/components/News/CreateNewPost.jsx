import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Box, Button, Input, Modal } from '@mui/material';
import { Form } from 'react-router-dom';
import { ModalFormNews } from './ModalFormNews';

const CreateNewPost = () => {
    const {user} = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
   

    const isAdmin = user?.role === 'admin' || user?.role === 'superadmin';
    console.log(isAdmin,'is admin')

    if(!isAdmin) {
        return null;
    }
    const handleOpenModal = ()=> {
        setOpenModal(true);
    }

    const handleCloseModal = ()=> {
        setOpenModal(false);
    }


  return (
    <>
        <Button onClick={handleOpenModal} variant='contained' sx={{background:"#8E1616", color:"white"}}>
            Crear publicacion 
        </Button>

        <ModalFormNews closeModal={handleCloseModal} isOpen={openModal} adminId={user.id}/>
    </>
    )
}

export default CreateNewPost