import React, { useEffect, useState } from 'react'
import ModalInputsCrud from '../ModalCrud/ModalInputsCrud';

const UpdateBtnModal = ({open,onUpdate, onClose, userRole, inputFields=[], initFieldsData= {} }) => {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (initFieldsData) {
      setFormData(initFieldsData);
      
   }
  }, [initFieldsData])



  
  return (
    <ModalInputsCrud titleMessage='Actualizar elemento' resetData={true} onClose={onClose} formData={formData} setFormData={setFormData} open={open} onConfirm={onUpdate} userRole={userRole}  inputFields={inputFields} />
  )
}

export default UpdateBtnModal