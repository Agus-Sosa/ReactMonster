import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const EditProfileButton = ({user, userInfo}) => {
  return (
    <>
    {user && user?.id === userInfo?.id_user && (
          <Box component={Link} sx={{backgroundColor:"#8E1616", p:1.4,borderRadius:1, color:"white", textDecoration:"none",transition:"0.5s all", ":hover":{backgroundColor:"#380E00"} }} to="/settings">
              Editar perfil 
          </Box>
        )}
    </>

)
}

export default EditProfileButton