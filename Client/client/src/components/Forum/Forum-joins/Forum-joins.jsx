import React, { useState } from 'react'
import { Box } from '@mui/system'
import Joins from './joins'

import forumtexture from '../../../assets/img/foro-bck.png'

function ForoJoins({ info, data }) {
    const rute = info.pathname
    const [grlData, setData] = useState(data)
    const [selected, setSelected] = useState(null)
    let text_to_route = rute.replace("/","/ ").toUpperCase() 

  const handleSelect = (item) => {
    setSelected(item)

  }
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${forumtexture})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1a1a1a',
        backgroundBlendMode: 'color-dodge',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '85vh',
          width: '80%',
          color: 'white',
        }}
      >
        <Box sx={{ fontSize: '1.2em', width: '100%', marginLeft: '6%' }}>
            {/* solo se va a mostrar el seleccionado si existe si no,nino */}
                <h2>COMUNIDAD {text_to_route} / {selected && (
                    selected.titulo)
                    }</h2>
        </Box>

        <Box sx={{ flexDirection: 'column', display: 'flex', margin: '5%' }}>
          {grlData.map((inf) => (
            <Joins
              key={inf.id}
              informacion={inf}
              onSelect={handleSelect}
            />
          ))}
        </Box>

        {selected && (

          <Box sx={{ marginTop: '20px' }}>
            <h3>Si ves esto agus es para ver si esta seleccionado {selected.titulo}</h3>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default ForoJoins