import { Box, Button, FormControl, Input, TextField, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import AuthForm from './AuthForm'
import { useState } from 'react'
const Register = () => {
     const mobile = useMediaQuery("(max-width:700px)")


 

    return (
        <>
        <Box sx={{backgroundColor:"#212121", color:"white", minHeight:"100vh", display:'flex', justifyContent:"center", alignItems:"center"}}>
        
        <Box sx={{textAlign:"center", width:`${mobile ? '100%' : "30%"}`}}>
            <Box component="h1" sx={{color:"white", mb:10}}>
            Registrarse
        </Box>
    
        <AuthForm  isForLogin={false}/>
        <Box component="div"> 
            ¿Ya tienes una cuenta?  <Link to="/login" style={{textDecoration:"none", color:"#D84040"}}>Iniciar Sesion</Link>
        </Box>
        </Box>

    </Box>
    </>
)
}



export default Register