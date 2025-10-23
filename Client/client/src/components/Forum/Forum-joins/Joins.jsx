import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Button,
  Box,
  Chip,
  Tooltip,
} from "@mui/material";
import { AuthContext } from "../../../context/AuthContext";
import "./joins.css";

function Joins({ informacion, onSelect, onRefresh }) {
  const { user, token } = useContext(AuthContext);

  const isPost = !!informacion.id_post;

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8080/post/${informacion.id_post}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) onRefresh?.();
  };

  const handleRevert = async () => {
    const res = await fetch(`http://localhost:8080/post/revert/${informacion.id_post}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) onRefresh?.();
  };

  return (
    <Card
      onClick={() => onSelect?.(informacion)}
      sx={{
        width: "100%",
        background:
          "linear-gradient(145deg, rgba(40,40,40,0.9), rgba(25,25,25,0.95))",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 3,
        color: "white",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.3s ease",
        
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          borderColor: "rgba(255,255,255,0.15)",
        },
        position: "relative",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: 2,
          gap: 1,
          textAlign: "left",
        }}
      >
        {/*icon*/}
        {informacion.imageUrl && (
          <Box
            component="img"
            src={informacion.imageUrl}
            alt={`icono de ${informacion.title}`}
            sx={{
              width: 50,
              height: 50,
              borderRadius: "10px",
              objectFit: "cover",
              mb: 1,
              opacity: 0.9,
              transition: "opacity 0.3s",
              "&:hover": { opacity: 1 },
            }}
          />
        )}

        {/* tittle */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "white",
            textShadow: "0px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          {informacion.title}
        </Typography>

        {/* resumen wacho */}
        {informacion.resume && (
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6,
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {informacion.resume}
          </Typography>
        )}

        {/* state */}
        {isPost && informacion.deleted && (
          <Chip
            label="Post eliminado"
            color="error"
            size="small"
            sx={{
              mt: 1,
              fontWeight: "bold",
              backgroundColor: "rgba(255, 70, 70, 0.3)",
            }}
          />
        )}
      </CardActionArea>

      {/* admin btn */}
      {isPost && (user?.role === "admin" || user?.role === "superadmin") && (
        <Box sx={{ position: "absolute", top: 10, right: 10 }}>
          {informacion.deleted ? (
            <Tooltip title="Revertir eliminación">
              <Button
                variant="contained"
                color="warning"
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRevert();
                }}
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: "8px",
                }}
              >
                Revertir
              </Button>
            </Tooltip>
          ) : (
            <Tooltip title="Eliminar publicacion">
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete();
                }}
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: "8px",
                  borderColor: "rgba(255,80,80,0.6)",
                  "&:hover": { borderColor: "rgba(255,80,80,1)" },
                }}
              >
                Eliminar
              </Button>
            </Tooltip>
          )}
        </Box>
      )}
    </Card>
  );
}

export default Joins;
