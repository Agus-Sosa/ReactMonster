import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import error_page from '../../assets/img/error_page.png'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
const mobile = useMediaQuery("(max-width:600px)")
  return (
    <>
    <Box  component="div" sx={{background: mobile ? 'black' : `url(${error_page})`, height:"100vh", display:`${mobile? 'block' : 'flex'}`, justifyContent:"end", alignItems:"center", p:2}}>

    <Box component="div" sx={{width:`${mobile ? 'auto' :'40%'}`, backgroundColor:"#380e00ad", color:"white", display:"flex", flexDirection:"column", gap:"14px", padding:2, border:"solid 0.5px"}} >
        <Box>
            Yyyyyyyy ya no está.
        </Box>
        <Box component="h3">
            404: Página devorada por un monstruo
        </Box>
        <Box sx={{background:"gray", padding:"0.5px"}}>

        </Box>
        <Box>
                Vamos a aprovechar este ancho de banda para invocar un hechizo y forzar al Guardián del CDN para que traiga la página que buscabas justo en…
                Yyyyyy ya no está.
                Un monstruo digital se la tragó entera. ¡Puf! No queda nada más que humo y garras en la arena.
        </Box>
        <Box component={Link} to='/' sx={{textDecoration:"none", padding:1, color:"white",width:"20%"}}>
            Volver a inicio
        </Box>
    </Box>
    {mobile && (

    <Box
    component='img'
    width="-webkit-fill-available"
    sx={{mt:2}}
    src={error_page}
    ></Box>
        )
}

    </Box>
    </>
  )
}

export default ErrorPage