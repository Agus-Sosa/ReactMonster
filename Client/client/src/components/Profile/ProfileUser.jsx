import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Box } from '@mui/material';
import PageContainer from '../Layout/PageContainer/PageContainer';
import { Link, useParams } from 'react-router-dom';

const ProfileUser = () => {
  const {user} = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const {id_user} = useParams();
    // const {user} = useContext(AuthContext);
  
  useEffect(()=> {
    fetch(`http://localhost:8080/users/${id_user}`)
    .then(res=> res.json())
    .then(data=> setUserData(data))
  },[id_user])

  const userInfo = userData;
  // console.log(uer)
  return (
    <Box sx={{minHeight:"80vh", py:7}}>
      <PageContainer>
        <Box sx={{display:'flex',justifyContent:"space-between", alignItems:"start" ,p:5, background:"#1e1e1e"}}>

      <Box sx={{display:"flex", gap:5, alignItems:"center"}}>


        <Box sx={{width:"250px", height:"250px", borderRadius:"50%", overflow:"hidden"}}>
          <Box component="img" sx={{width:"100%"}} src={userInfo.user?.profile_picture}/>
        </Box>
        <Box sx={{color:'white'}}>
          <Box component="h1" sx={{fontSize:"40px", mb:2 }}>
              {userInfo.user?.user_name}
          </Box>
          <Box>
            Rango: {userInfo.user?.range}
          </Box>
          <Box>
            Ultima Conexion: {new Date(userInfo.user?.last_connection).toLocaleDateString('es-AR')}
          </Box>
          <Box>
            Miembro desde: {new Date(userInfo.user?.createdAt).toLocaleDateString('es-AR')}
          </Box>
        </Box>
              </Box>

        {user && user?.id === userInfo.user?.id_user && (
          <Box component={Link} sx={{backgroundColor:"#8E1616", p:1.4, borderRadius:1, color:"white", textDecoration:"none",transition:"0.5s all", ":hover":{backgroundColor:"#380E00"} }} to="/settings">
              Editar perfil 
          </Box>
        )}
        </Box>
            <Box sx={{ display: "flex", gap: 5, mt: 5, color: "white" }}>
              <Box sx={{ flex: 1, backgroundColor: "#1e1e1e", p: 2 }}>
                <Box component="h2" sx={{ fontSize: "30px", my: 3 }}>Juego</Box>
                <Box>
                  Rango {userInfo.user?.range}
                </Box>
              </Box>

                <Box sx={{ flex: 1, backgroundColor: "#1e1e1e", p: 2 }}>
                  <Box component="h2" sx={{ fontSize: "30px", my: 3 }}>Foro</Box>
                  <Box>Publicaciones: {userData.user?.total_post}</Box>
                  <Box>Comentarios: {userData.user?.total_comments}</Box>
                  <Box>Megustas recibidos: {userData.user?.total_get_like}</Box>
                  <Box>Megustas Dados: {userData.user?.total_give_like}</Box>

                </Box>
      </Box>


      </PageContainer>
       
    </Box>
  )
}

export default ProfileUser