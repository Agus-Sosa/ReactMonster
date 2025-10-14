import { Alert, Box, Button, FormControl, Input, InputBase, useMediaQuery } from '@mui/material'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'
import { AuthContext } from '../../context/AuthContext'

const AuthForm = ({ isForLogin}) => {
    const {handleUserLogin } = useContext(AuthContext)
    const mobile = useMediaQuery("(max-width:700px)")

    const navigate =useNavigate();

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_password: "",
        repeat_password:"",
    })

    const [error, setError] = useState({});


        const fieldTypes = isForLogin ? [
        {name:"user_email", placeholder: "Email", type: "email", value:formData.user_email},
        {name: "user_password", placeholder: "Contraseña", type: "password", value: formData.user_password}
    ]: [
        {name:"user_name", placeholder: "Nombre de usuario", type: "text", value:formData.user_name},
        {name: "user_email", placeholder: "Email", type:"email", value: formData.user_email},
        {name:"user_password", placeholder:"contraseña", type:"password", value: formData.user_password},
        {name:"repeat_password", placeholder:"Repetir contraseña", type:"password", value:formData.repeat_password}
    ]
    

    const style_input = {
        p:2,
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
    setError((prev)=> ({...prev, [name]: false}))
  };

  const handleSubmit= async(e)=> {
    e.preventDefault();
    try {
    
        if(!isForLogin) {
            if(formData.user_password !== formData.repeat_password) {
                setError((prev)=> ({...prev, message: "Las contraseñas no coiciden"}));
                return;
            }
        }
   
        const typeForm = isForLogin ? "login" : "register";
        const res = await fetch(`http://localhost:8080/auth/${typeForm}`, {
            headers: {
                    'Content-Type': 'application/json',
            },
            method:"POST",
            body: JSON.stringify(formData)
        })

        const data = await res.json();
        if(!res.ok) {
            setError((prev)=> ({...prev, message:data.message}))
            return;
        } 

        toast.success(
            isForLogin ? "Se inicio correctamente" : "Se regitro el usuario correctamente",
        )

        if(isForLogin) {
            handleUserLogin(data.token);
            navigate('/');
        } else {
            navigate('/login')
        }

        setError({})
        
        setFormData({
            user_email:"",
            user_name:"",
            user_password:"",
            repeat_password: "",
        })
        } catch (error) {
        console.log(error, "error")
    }

   
  }



  return (
    <>
    {error.message && 
        <Alert sx={{my:1}} severity="warning">{error.message}</Alert>

    }
    <Box component={"form"} onSubmit={handleSubmit} sx={{display:"flex", flexDirection:"column", gap:3  }}>
            {fieldTypes.map((field)=> (
                <Input key={field.name} component="input" name={field.name} value={field.value} placeholder={field.placeholder} type={field.type} sx={style_input} onChange={handleChange}/>
            ))}
             <Button type='submit' variant='contained' sx={{my:3, py:2, background:'#8E1616', fontWeight:"bold"}}>
            {isForLogin ? "Iniciar Sesion" :"Registrarse"}
        </Button>
        </Box>

                <ToastContainer />

       
    </>
)
}

export default AuthForm