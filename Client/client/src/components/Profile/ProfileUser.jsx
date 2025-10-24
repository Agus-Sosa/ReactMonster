import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Box } from '@mui/material';
import PageContainer from '../Layout/PageContainer/PageContainer';
import { useParams ,useNavigate,} from 'react-router-dom';
import EditProfileButton from './EditProfileButton';
import InfoProfileCardContainer from './infoProfile/infoProfileCardContainer';
import PostCardProfileContainer from './PostUserProfile/PostCardProfileContainer';

const ProfileUser = () => {
  const {user} = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const {id_user} = useParams();
  const [notUser, setNotUser]= useState(false);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

    // const {user} = useContext(AuthContext);
  
  useEffect(()=> {
    const fetchGetUser = async()=> {
      try {
        const res = await fetch(`http://localhost:8080/users/${id_user}`);

        if(!res.ok) {
          setNotUser(true);
          return;
        }

        const data = await res.json();
        console.log(data)
        setNotUser(false);
        setUserData(data.user);
        setPosts(data.user.Posts);


      } catch (error) {
        console.log(error)
        setNotUser(true);
      }
    }

    fetchGetUser();

  },[id_user])

  const userInfo = userData;

  if (notUser) return navigate("/*")
  
  const infoDetails = [
    {
      title: "ultima conexion", detail: new Date(userData?.last_connection).toLocaleDateString('es-AR')
    },
    {
      title: "Miembro desde", detail: new Date(userData?.createdAt).toLocaleDateString('es-AR')

    }, {
      title: "Rango", detail: userData?.range
    },
    {
      title: "Publicaciones", detail: userData?.total_post
    },
    {
      title: "Comentarios", detail: userData?.total_comments
    },

    {
      title: "Megustas recibidos", detail: userData?.total_get_like
    },
    {
      title: "Megustas dados", detail: userData?.total_give_like
    },
  ]

  return (
    <Box sx={{minHeight:"80vh", py:2}}>
      <PageContainer>
        {/* <Box sx={{display:'flex',justifyContent:"space-between", alignItems:"start" ,p:5, background:"#1e1e1e", border:"solid 0.5px gray", borderRadius:2}}>

      <Box sx={{display:"flex", gap:5, alignItems:"center", justifyContent:"center",flexWrap:"wrap", textAlign:{xs:"center", md:"left"}}}>


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
        <Box sx={{display:{xs:"none",md:"block"}}}>
        <EditProfileButton user={user} userInfo={userInfo}/>

        </Box>
        </Box>
            <Box sx={{ display: "flex",flexDirection:{xs:"column",md:"row"}, gap: {xs:2,md:5}, mt: {xs:2,md:5}, color: "white", flexWrap: "wrap" }}>
              <Box sx={{ flex: 1, backgroundColor: "#1e1e1e", p: 2 ,  border:"solid 0.5px gray", borderRadius:2}}>
                <Box component="h2" sx={{ fontSize: "30px", my: 3 }}>Juego</Box>
                <Box>
                  Rango {userInfo.user?.range}
                </Box>
              </Box>

                <Box sx={{ flex: 1, backgroundColor: "#1e1e1e", p: 2,  border:"solid 0.5px gray" , borderRadius:2}}>
                  <Box component="h2" sx={{ fontSize: "30px", my: 3 }}>Foro</Box>
                  <Box>Publicaciones: {userData.user?.total_post}</Box>
                  <Box>Comentarios: {userData.user?.total_comments}</Box>
                  <Box>Megustas recibidos: {userData.user?.total_get_like}</Box>
                  <Box>Megustas Dados: {userData.user?.total_give_like}</Box>

                </Box>
      </Box>
      <Box sx={{display:{xs:"block",md:"none"}, my:5}}>
        <EditProfileButton user={user} userInfo={userInfo}/>

        </Box> */}
      
        
      

        <Box>
          <Box sx={{ display: "flex", gap: 1, color: "white", justifyContent:"space-between", width:"100%",  alignItems:'start' }}>
            <Box sx={{ display: "flex", gap: 1, color: "white"}}>

          <Box component={"img"} src={ userData?.profile_picture}  sx={{width:{xs:"300px" ,md:"150px"}, borderRadius:1}}/>
            <Box>
              <Box sx={{fontSize:"24px", fontWeight:"bold"}}>
                {userData?.user_name}
              </Box>
              <Box>
                Rango: {userData?.range}
                </Box>
                  </Box>
            </Box>

                <EditProfileButton user={user} userInfo={userInfo}/>

          </Box>
        </Box>
        <Box my={5}>
          <Box sx={{borderBottom:"0.5px solid gray", my:2, color:"white", fontSize:"24px", fontWeight:"bold", paddingBottom:1}}>
            Estadisticas
          </Box>
          <InfoProfileCardContainer info={infoDetails}/>
        </Box>
        <Box>
           <Box sx={{borderBottom:"0.5px solid gray", my:2, color:"white", fontSize:"24px", fontWeight:"bold", paddingBottom:1}}>
            Publicaciones
          </Box>
          <PostCardProfileContainer info={posts}/>
        </Box>
      </PageContainer>
       
    </Box>
  )
}

export default ProfileUser