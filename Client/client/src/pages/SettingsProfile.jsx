import { Box } from "@mui/material"
import { useContext } from "react"
import PageContainer from "../components/Layout/PageContainer/PageContainer"
import DesactivateUserButton from "../components/Profile/DesactivateUserButton"
import { AuthContext } from "../context/AuthContext"

const SettingsProfile = () => {

  const {user, token} = useContext(AuthContext)

  const handleUpdateUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/users/", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        method: "PUT",
      })


      if (!res.ok) {
        Toast
      }

    } catch (error) {
      
    }
  }


  return (
    <Box sx={{minHeight:"100vh"}}>

    <PageContainer>
      <Box component={"h1"} sx={{color:"white"}}>
              Configuracion de perfil
      </Box>
          <Box component={"img"} sx={{width:{xs:"250px", md:"200px"},my:5, borderRadius:"50%"}} src={user.profile_picture} />
        <Box>
          
          <Box component={"form"}sx={{display:"flex", flexDirection:"column"}}>
            <Box component={"input"} type={"text"} placeholder={"Nombre"} />
            <Box component={"input"} type={"text"} placeholder={"Apellido"} />
            <Box component={"input"} type={"text"} placeholder={"Email"} />
          </Box>
              <DesactivateUserButton user={user}   />



      </Box>
      </PageContainer>
          </Box>

  )
}

export default SettingsProfile