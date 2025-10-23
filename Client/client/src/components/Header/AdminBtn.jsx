import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'


function AdminBtn() {
    const { user } = useContext(AuthContext); 
    if (!user || user.role != "superadmin") return null
  return (
    <Box component={Link} to="/admin"   sx={{ p:"10px" , border:"none", color:"white", cursor:"pointer", fontSize:"18px", borderRadius:"3px", textDecoration:"none",transition:"all .5s", "&:hover":{color:"#8E1616"}}}>
            Administrar
        </Box>
  )
}

export default AdminBtn