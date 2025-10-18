import React, { useContext } from "react";
import { Card, CardContent, CardActionArea, Typography, Button, Box } from "@mui/material";
import { AuthContext } from "../../../context/AuthContext";
import "./joins.css";

function Joins({ informacion, onSelect, onRefresh }) {
  const { user, token } = useContext(AuthContext);

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
      sx={{
        width: "100%",
        height: "95px",
        margin: "20px",
        backgroundColor: "transparent",
        color: "white",
        border: "1px solid white",
        cursor: "pointer",
        wordBreak: "break-word",
        position: "relative"
      }}
      onClick={() => onSelect?.(informacion)}
    >
      <CardActionArea>
        <CardContent sx={{ wordBreak: "break-word" }}>
          <Typography gutterBottom variant="h5" component="div">
            <img
              src={informacion.imageUrl}
              className="forum-icons"
              alt={`icono de ${informacion.title}`}
            />
            {informacion.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "white", wordBreak: "break-word" }}>
            {informacion.resume}
          </Typography>
        </CardContent>
      </CardActionArea>

    {(user?.role === "admin" || user?.role === "superadmin") && (
      <Box sx={{ position: "absolute", top: 8, right: 8 }}>
        {informacion.deleted ? (
          <Button
            variant="outlined"
            color="warning"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handleRevert();
            }}
          >
            Revertir
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            Eliminar
          </Button>
        )}
      </Box>
    )}

    </Card>
  );
}

export default Joins;
