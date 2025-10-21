import React, { useEffect, useState } from 'react'
import ModalInputsCrud from '../ModalCrud/ModalInputsCrud';

const UpdateBtnModal = ({open,onUpdate, onClose, userRole, inputFields=[], initFieldsData= {} }) => {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (initFieldsData) {
      setFormData(initFieldsData);
      
   }
  }, [initFieldsData])


  console.log("formData en UpdateBtnModal:", formData);


  const handleCancel = () => { 
    setFormData({});
    onClose();
  }



  
  return (
    <ModalInputsCrud onClose={handleCancel} formData={formData} setFormData={setFormData} open={open} onConfirm={onUpdate} userRole={userRole}  inputFields={inputFields} />
  )
}

export default UpdateBtnModal