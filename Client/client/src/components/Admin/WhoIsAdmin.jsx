import React, { useEffect, useState, useContext } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AuthContext } from "../../context/AuthContext.jsx";
import Loading from "../LoadingComp/Loading.jsx";
import ErrorComp from "../ErrorComp/ErrorComp.jsx";
import localeTextES from "./LocalTxt.js"

export default function AdminUsersTable({ refresh }) {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await fetch("http://localhost:8080/users/admins", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Error al obtener los administradores");
        }

        const data = await response.json();

        const formattedData = data.map((admin) => ({
          id: admin.id_user,
          name: admin.user_name,
          email: admin.user_email,
          role: admin.role,
        }));

        setAdmins(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, [token, refresh]);

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Nombre", flex: 1 },
    { field: "email", headerName: "Correo", flex: 1 },
    { field: "role", headerName: "Rol", width: 120 },
  ];

  if (loading) return <Loading/>

  if (error) return <ErrorComp/>

  return (
    <Box
      sx={{
        width: { xs: "95%", sm: "85%", md: "70%", lg: "60%" },
        maxWidth: 900,
        mx: "auto",
        mt: 4,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: "#121212", 
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 1,
          color: "#e0e0e0", 
        }}
      >
        Lista de Administradores
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: { xs: 400, md: 500 },
          "& .MuiDataGrid-root": {
            border: "none",
            bgcolor: "#1e1e1e", 
          },
          "& .MuiDataGrid-cell": {
            color: "#fdfafaff",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#2c2c2c",
            color: "#b0b0b0", 
            fontWeight: "bold",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#2c2c2c",
            color: "#b0b0b0",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#3a3939ff", 
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        }}
      >
        <DataGrid
          rows={admins}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          disableRowSelectionOnClick
          localeText={localeTextES} // para que aparezcan en español panitas
          sx={{
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Box>
    </Box>
  );
}
