import { Box, height } from '@mui/system'
import React from 'react'


function ForoJoins({info}) {
    const rute = info.pathname
    console.log(rute)
    const text_to_route = rute.replace("/","")
  return (
    <Box sx={{
        height: '100vh',
        backgroundColor: '#1a1a1a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
    }}>

        <Box sx={{
            display: 'flex',
            backgroundColor: 'red',
            height: '85vh',
            width: '80%',
            color:'white',
        }}>
            <h2>Comunidad / {text_to_route} </h2>
        </Box>
    </Box>

)
}

export default ForoJoins