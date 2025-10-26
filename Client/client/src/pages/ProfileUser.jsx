import { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material';
import { useParams ,useNavigate,} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import PageContainer from '../components/Layout/PageContainer/PageContainer';
import DesactivateUserButton from '../components/Profile/DesactivateUserButton';
import InfoProfileCardContainer from '../components/Profile/infoProfile/infoProfileCardContainer';
import PostCardProfileContainer from '../components/Profile/PostUserProfile/PostCardProfileContainer';
import { toast } from 'react-toastify';
import EditProfileButton from '../components/Profile/EditProfileButton';

const ProfileUser = () => {
  const {user, token} = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const {id_user} = useParams();
  const [notUser, setNotUser]= useState(false);
  const [posts, setPosts] = useState([]);
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const navigate = useNavigate();

    // const {user} = useContext(AuthContext);
  
  useEffect(()=> {
    const fetchGetUser = async()=> {
      try {
        const res = await fetch(`http://localhost:8080/users/${id_user}`);

        if(!res.ok) {
          setNotUser(true);
          toast.error("No se pudo cargar el perfil del usuario.");
          return;
        }

        const data = await res.json();
        setNotUser(false);
        setUserData(data.user);
        setPosts(data.user.Posts);


      } catch (error) {
        toast.error("Error al conectar con el servidor.");
        setNotUser(true);
      }
    }

    fetchGetUser();

  },[id_user])



  const handleCancelDelete = async () => {
    setOpenModalDelete(false);
  }
  const handleOpenDelete = async () => {
    setOpenModalDelete(true);
  }



  const handleDeleteUser = async () => { 
    try {
      const res = await fetch(`http://localhost:8080/users/${id_user}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        method: "DELETE",
      })

      if (!res.ok) {
        toast.error("Error al desactivar el usuario.");
        return;
      };

      const data = await res.json();
      setUserData(data.deletedUser);
      toast.success("Usuario desactivado correctamente.");
      handleCancelDelete();

    } catch (error) {
      toast.error("Ocurrió un error inesperado al desactivar el usuario.");
    }
  }

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
    
        <Box>
          <Box sx={{ display: "flex", gap: 1, color: "white", justifyContent:"space-between", flexDirection:{xs:"column",md:"row"}, width:"100%",  alignItems:'start' }}>
            <Box sx={{ display: "flex", gap: 1, color: "white", flexDirection:{xs:"row",md:"row"},  flexWrap:"wrap" }}>

          <Box component={"img"} src={ userData?.profile_picture}  sx={{width:{xs:"200px" ,md:"150px"}, borderRadius:1}}/>
            <Box>
              <Box sx={{fontSize:"24px", fontWeight:"bold"}}>
                {userData?.user_name}
              </Box>
              <Box>
                Rango: {userData?.range}
                </Box>
                  </Box>
            </Box>

            <Box my={2}>
                <EditProfileButton user={user} userInfo={userInfo}/>
              <DesactivateUserButton onDeleteUser={handleDeleteUser} onOpen={ handleOpenDelete}  open={openModalDelete} myUser={user}  userView={userData} onClose={handleCancelDelete}/>
            </Box>

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