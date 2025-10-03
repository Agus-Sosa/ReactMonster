import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Box } from '@mui/material';
import PageContainer from '../Layout/PageContainer/PageContainer';

const ProfileUser = () => {
    const {user} = useContext(AuthContext);
    const fieldInputs= {
      label: "Nombre de usuario", value: user.user_name,
      label:"Email", value: user.email,
      label:"Descripcion", value: user.description
    }
  return (
    <Box sx={{minHeight:"80vh"}}>
      <PageContainer>
        <Box sx={{display:'flex', justifyContent:"space-around", alignItems:"center"}}>


        <Box sx={{width:"250px", height:"250px", borderRadius:"50%", overflow:"hidden"}}>
          <Box component="img" sx={{width:"100%"}} src={user.profile_picture}/>
        </Box>
        <Box>
          <Box sx={{display:"flex", flexDirection:"column", alignItems:"start", gap:2}}>
            <Box component="label">Nombre de usuario</Box>
            <Box component="input" sx={{fontSize:"30px", fontWeight:"bold", color:"white"}}>{user.username}</Box>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column", alignItems:"start", gap:2}}>
            <Box component="label">Nombre de usuario</Box>
            <Box component="input" sx={{fontSize:"30px", fontWeight:"bold", color:"white"}}>{user.username}</Box>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column", alignItems:"start", gap:2}}>
            <Box component="label">Nombre de usuario</Box>
            <Box component="input" sx={{fontSize:"30px", fontWeight:"bold", color:"white"}}>{user.username}</Box>
          </Box>
        </Box>
        </Box>

      </PageContainer>
       
    </Box>
  )
}

export default ProfileUser