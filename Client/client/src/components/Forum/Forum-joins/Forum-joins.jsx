import { Box, display, height } from '@mui/system'
import React from 'react'
import Joins from './joins'
import infor  from './info.js'

function ForoJoins({info}) {
    const rute = info.pathname
    console.log(rute)
    const text_to_route = rute.replace("/","")
  return (
        <Box
            sx={{
                height: '100vh',
                backgroundColor: '#1a1a1a',
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
                <Box sx={{ margin: '10px', width: '100%',marginLeft:'6%' }}>
                    <h2>Comunidad / {text_to_route}</h2>
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