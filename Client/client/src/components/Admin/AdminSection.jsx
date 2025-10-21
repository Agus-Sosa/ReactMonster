import React, { useState, useContext } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  CircularProgress,
  Alert,
  Stack,
} from "@mui/material";
import { AuthContext } from "../../context/AuthContext.jsx";
import AdminUsersTable from "./WhoIsAdmin.jsx";
// ODIO EL FRONT CON TODA MI ALMA
const roles = [
  { value: "user", label: "Usuario" },
  { value: "admin", label: "Administrador" },
  { value: "superadmin", label: "Super Administrador" },
];

const UserRoleManager = () => {
  const [email, setEmail] = useState("");
  const [userFound, setUserFound] = useState(null);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { token } = useContext(AuthContext);
  const [refreshAdmins, setRefreshAdmins] = useState(false); // para refrescar la lista de mui

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setSuccessMsg("");
    setUserFound(null);

    try {
      const response = await fetch(
        `http://localhost:8080/users/email/${email}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Usuario no encontrado");
      }

      const data = await response.json();
      if (!data.user || data.user.length === 0) {
        throw new Error("Usuario no encontrado");
      }

      const foundUser = data.user[0];
      setUserFound(foundUser);
      setRole(foundUser.role);
    } catch (err) {
      setError(err.message || "Error al buscar usuario");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateRole = async () => {
    if (!userFound) return;
    setUpdating(true);
    setError("");
    setSuccessMsg("");

    try {
      const response = await fetch(
        `http://localhost:8080/users/${userFound.id_user}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ role }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "No se pudo actualizar el rol");
      }

      const data = await response.json();
      setSuccessMsg(`Rol actualizado correctamente a "${role}"`);
      setUserFound(data.data);
      setRefreshAdmins((prev) => !prev); //aviso a la tabla
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <>
    <Paper
      elevation={4}
      sx={{
        p: { xs: 2, sm: 4 },
        mx: "auto",
        mt: { xs: 2, sm: 6 },
        borderRadius: 3,
        backgroundColor: "transparent",
        color: "white",
        width: { xs: "95%", sm: "80%", md: "70%", lg: "60%" },
        maxWidth: 900,
        maxHeight: "85vh",
        overflowY: "auto",
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h5" fontWeight={600} mb={3} textAlign="center">
        Gestión de Roles de Usuario
      </Typography>

      <Stack spacing={2.5}>
        {/* Search User */}
        <TextField
          label="Buscar por Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading || updating}
          sx={{
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
              "&.Mui-focused fieldset": { borderColor: "white" },
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ height: 45 }}
          onClick={handleSearch}
          disabled={!email || loading}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Buscar Usuario"
          )}
        </Button>

        {error && <Alert severity="error">{error}</Alert>}
        {successMsg && <Alert severity="success">{successMsg}</Alert>}

        {/*User data and role */}
        {userFound && (
          <Stack spacing={2.5} mt={2}>
            <Typography variant="subtitle1">
              <strong>Nombre:</strong> {userFound.user_name}
            </Typography>
            <Typography variant="subtitle1">
              <strong>Email:</strong> {userFound.user_email}
            </Typography>

            <TextField
              select
              label="Rol"
              fullWidth
              value={role}
              onChange={(e) => setRole(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
            >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{ height: 45 }}
              onClick={handleUpdateRole}
              disabled={updating}
            >
              {updating ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Actualizar Rol"
              )}
            </Button>
          </Stack>
        )}
      </Stack>
      </Paper>
      <AdminUsersTable refresh={refreshAdmins}/>
      </>
  );
};

export default UserRoleManager;