import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react'
import ModalInputsCrud from '../ModalCrud/ModalInputsCrud';

const CreateBtnModal = ({ open, onClose, onCreate, userRole, inputFields = [] }) => {
      const [formData, setFormData] = useState({});

    
    if (userRole !== "admin" && userRole !== "superadmin") return null;

 

  return (
      <>
            <ModalInputsCrud titleMessage='Crear elemento' resetData={true}  onClose={onClose} formData={formData} setFormData={setFormData} open={open} onConfirm={onCreate} userRole={userRole}  inputFields={inputFields} />

      </>
)
}

export default CreateBtnModal