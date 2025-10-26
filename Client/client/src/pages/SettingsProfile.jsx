import { Box, Button, TextField } from "@mui/material"
import { useContext, useState } from "react"
import PageContainer from "../components/Layout/PageContainer/PageContainer"
import DesactivateUserButton from "../components/Profile/DesactivateUserButton"
import { AuthContext } from "../context/AuthContext"

const SettingsProfile = () => {
  const { user, token } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    user_name: user.user_name || "",
    user_password: "",
  })

  const validateInputs = () => {
    return formData.user_name.trim() !== "" && formData.user_password.trim() !== ""
  }

  const handleUpdateUser = async (e) => {
    e.preventDefault()
    if (!validateInputs()) return alert("Todos los campos son obligatorios")

    try {
      const res = await fetch(`http://localhost:8080/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Error al actualizar usuario")

      const data = await res.json()
      setFormData({ ...formData, user_password: "" })
      alert("Usuario actualizado correctamente")

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <PageContainer>
        <Box component="h1" sx={{ color: "white" }}>
          Configuración de perfil
        </Box>

        <Box sx={{ margin: "auto" }}>
          <Box
            component="img"
            sx={{
              width: { xs: "250px", md: "200px" },
              my: 5,
              borderRadius: "50%",
            }}
            src={user.profile_picture}
            alt="Foto de perfil"
          />

          <Box
            component="form"
            onSubmit={handleUpdateUser}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { xs: "100%", md: "50%" },
            }}
          >
            <TextField
              label="Nombre"
              name="user_name"
              value={formData.user_name}
              onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
              fullWidth
            />
            <TextField
              label="Contraseña"
              name="user_password"
              type="password"
              value={formData.user_password}
              onChange={(e) => setFormData({ ...formData, user_password: e.target.value })}
              fullWidth
            />
            <Button variant="contained" type="submit">
              Guardar
            </Button>
          </Box>

          <DesactivateUserButton user={user} />
        </Box>
      </PageContainer>
    </Box>
  )
}

export default SettingsProfile
