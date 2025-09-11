import { Box, Button, useMediaQuery } from '@mui/material'
import React from 'react'

const AuthForm = ({fields, buttonText, onSubmit}) => {
     const mobile = useMediaQuery("(max-width:700px)")

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

  return (
    <>
    <Box component="form" onSubmit={onSubmit} sx={{display:"flex", flexDirection:"column", gap:3, width: mobile ? "-webkit-fill-available" : '' , margin: mobile ? "0 30px" : '' }}>
            {fields.map((field)=> (
                <Box component="input" placeholder={field.placeholder} type={field.type} sx={style_input}/>
            ))}
        </Box>
        <Button variant='contained' sx={{my:3, py:2, background:'#8E1616', fontWeight:"bold"}}>
            {buttonText}
        </Button>
    </>
)
}

export default AuthForm