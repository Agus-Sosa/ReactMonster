import { Box, Input, TextField, useMediaQuery } from '@mui/material'
import React from 'react'
import bg_register from '../../assets/img/bg_register.png'
const Register = () => {
    const mobile = useMediaQuery("(max-width:700px)")
    return (
    <Box component="section" sx={{background: mobile ?  "black" : `url(${bg_register})`, backgroundSize:"cover", backgroundPosition:"center" , minHeight:"100vh"}}>
        <Box component="h1">
            Crear Cuenta
        </Box>
    <Box component="form">
        <Box component="h6">
            No te precupes, no le diremos a nadie.
        </Box>
        <TextField label="Correo electronico"/>
    </Box>
    </Box>
)
}

export default Register