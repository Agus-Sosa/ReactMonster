import { Box, Button, TextField } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import PageContainer from "../components/Layout/PageContainer/PageContainer"
import { AuthContext } from "../context/AuthContext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import ModalConfirm from "../components/Buttons/ModalCrud/ModalConfirm"

const SettingsProfile = () => {
  const { user, token, handleUserLogout } = useContext(AuthContext)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    user_name: user.user_name || "",
    user_password: "",
  })
  const [openModalDelete, setOpenModalDelete] = useState(false)

  useEffect(() => {
    if (user?.user_name) {
      setFormData((prev) => ({ ...prev, user_name: user.user_name }))
    }
  }, [user])

  const handleUpdateUser = async (e) => {
    e.preventDefault()

    const { user_name, user_password } = formData
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/

    if (!user_name.trim()) {
      return toast.error("El nombre de usuario no puede estar vacío.")
    }

    if (user_password && !passwordRegex.test(user_password)) {
      return toast.error(
        "La contraseña debe tener al menos 6 caracteres, una mayúscula y un número."
      )
    }

    const payload = { user_name: user_name.trim() }
    if (user_password) {
      payload.user_password = user_password
    }

    try {
      const res = await fetch(`http://localhost:8080/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const errorText = await res.text();
        try {
          const errorData = JSON.parse(errorText);
          throw new Error(errorData.message || "Error al actualizar usuario");
        } catch (e) {
          throw new Error(`Error del servidor: ${res.status} ${res.statusText}`);
        }
      }

      setFormData({ ...formData, user_password: "" })
      toast.success("Usuario actualizado correctamente. Se requiere un nuevo inicio de sesión para ver los cambios.")
    } catch (error) {
      toast.error(error.message || "Ocurrió un error inesperado.")
    }
  }

  const handleOpenDelete = () => setOpenModalDelete(true)
  const handleCancelDelete = () => setOpenModalDelete(false)

  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`http://localhost:8080/users/${user.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!res.ok) {
        const errorText = await res.text();
        try {
            const errorData = JSON.parse(errorText);
            throw new Error(errorData.message || "Error al desactivar el usuario.");
        } catch (e) {
            throw new Error(`Error del servidor: ${res.status} ${res.statusText}`);
        }
      }

      toast.success("Usuario desactivado. Serás redirigido.")
      handleCancelDelete()
      setTimeout(() => {
        handleUserLogout();
        navigate("/login");
      }, 3000)
    } catch (error) {
      toast.error(error.message || "Ocurrió un error inesperado al desactivar el usuario.")
    }
  }

  const textFieldStyles = {
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.7)',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  }

  return (
    <Box sx={{ minHeight: "100vh", py: 4, display: 'flex', alignItems: 'center' }}>
      <PageContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box component="h1" sx={{ color: "white", textAlign: 'center', mb: 2 }}>
            Configuración de perfil
          </Box>

          <Box
            sx={{
              width: { xs: '95%', sm: '80%', md: '600px' },
              p: { xs: 2, md: 4 },
              bgcolor: 'rgba(30, 30, 30, 0.5)', 
              borderRadius: 4,
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "150px", md: "180px" },
                height: { xs: "150px", md: "180px" },
                borderRadius: "50%",
                objectFit: 'cover',
                border: '3px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 0 15px rgba(0,0,0,0.5)'
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
                width: '100%',
              }}
            >
              <TextField
                label="Nombre de usuario"
                name="user_name"
                value={formData.user_name}
                sx={textFieldStyles}
                onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                fullWidth
              />
              <TextField
                label="Nueva Contraseña (opcional)"
                name="user_password"
                sx={textFieldStyles}
                type="password"
                value={formData.user_password}
                onChange={(e) => setFormData({ ...formData, user_password: e.target.value })}
                fullWidth
              />
              <Button sx={{ mt: 1 }} variant="contained" color="primary" type="submit">
                Guardar Cambios
              </Button>
            </Box>
            
            {/* Botón para que el usuario desactive su propia cuenta */}
            <Button onClick={handleOpenDelete} variant="outlined" color="error" sx={{ alignSelf: 'stretch' }}>
              Desactivar mi cuenta
            </Button>
            <ModalConfirm
              open={openModalDelete}
              onClose={handleCancelDelete}
              onConfirm={handleDeleteUser}
            />
          </Box>
        </Box>
      </PageContainer>
    </Box>
  )
}

export default SettingsProfile
