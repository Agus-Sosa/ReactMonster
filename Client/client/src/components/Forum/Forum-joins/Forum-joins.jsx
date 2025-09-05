import { Box, display, height } from '@mui/system'
import React, { useState } from 'react'
import Joins from './joins'
import infor  from './info.js'
import forumtexture from '../../../assets/img/foro-bck.png'

function ForoJoins({info}) {
    const rute = info.pathname
    console.log(rute)
    let text_to_route = rute.replace("/","/ ").toUpperCase()
    if (text_to_route === '/ FORO'){
        text_to_route = text_to_route.replace("/ FORO"," ")
        console.log(text_to_route)
    }

    return (
        <Box
            sx={{
                height: '100vh',
                backgroundImage:`url(${forumtexture})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundColor: '#1a1a1a',
                backgroundBlendMode: 'color-dodge',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '85vh',
                    width: '80%',
                    color: 'white',
                }}
            >
                <Box sx={{ fontSize:'1.2em',width: '100%',marginLeft:'6%' }}>
                    <h2>COMUNIDAD / FORO {text_to_route}</h2>
                </Box>
                <Box sx={{ flexDirection: 'column', display: 'flex', margin:'5%' }}> 
                    {infor.map(inf => (
                        <Joins key={inf.id} informacion={inf} />
                        ))}
                </Box>
            </Box>
        </Box>
    );
}

export default ForoJoins