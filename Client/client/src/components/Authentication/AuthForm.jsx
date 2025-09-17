import { Box, Button, FormControl, Input, InputBase, useMediaQuery } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import {toast, ToastContainer} from 'react-toastify'

const AuthForm = ({ isForLogin}) => {
    const mobile = useMediaQuery("(max-width:700px)")
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_password: "",
    })




        const fieldTypes = isForLogin ? [
        {name:"user_email", placeholder: "Email", type: "email", value:formData.user_email},
        {name: "user_password", placeholder: "Contraseña", type: "password", value: formData.user_password}
    ]: [
        {name:"user_name", placeholder: "Nombre de usuario", type: "text", value:formData.user_name},
        {name: "user_email", placeholder: "Email", type:"email", value: formData.user_email},
        {name:"user_password", placeholder:"password", type:"password", value: formData.user_password},
    ]
    

   const style_input = {
        p:2,
        border:"none",
        outline: "none",
        backgroundColor:"#2b2b2bff",
        color:"white",
        fontSize:"16px",    
        borderRadius:"4px",
        border:"0.5px solid gray"
    }

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
  };

  const handleSubmit= async(e)=> {
    e.preventDefault();
    try {
        
   
        const typeForm = isForLogin ? "login" : "register";
        const res = await fetch(`http://localhost:8080/users/${typeForm}`, {
            headers: {
                    'Content-Type': 'application/json',
            },
            method:"POST",
            body: JSON.stringify(formData)
        })

        console.log(res);
        if(!res.ok) {
            const errorMessage = await res.json();
            toast.error(errorMessage.message);
            return;
        }

        toast.success(
            isForLogin ? "Se inicio correctamente" : "Se regitro el usuario correctamente"
        )

        
        setFormData({
            user_email:"",
            user_name:"",
            user_password:"",
        })
         } catch (error) {
        console.log(error, "error")
    }

   
  }

  return (
    <>
    <form  onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:3, width: mobile ? "-webkit-fill-available" : "100%" , margin: mobile ? "0 30px" : '' }}>
            {fieldTypes.map((field)=> (
                <Input component="input" name={field.name} value={field.value} placeholder={field.placeholder} type={field.type} sx={style_input} onChange={handleChange}/>
            ))}
             <Button type='submit' variant='contained' sx={{my:3, py:2, background:'#8E1616', fontWeight:"bold"}}>
            {isForLogin ? "Iniciar Sesion" :"Registrarse"}
        </Button>
        </form>

                <ToastContainer />

       
    </>
)
}

export default AuthForm