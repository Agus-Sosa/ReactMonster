import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import haveBadWord from "../../../../../../Backend/src/middleware/badwords.js";
import { AuthContext } from "../../../context/AuthContext.jsx";


const CommentForm = ({ id_post, id_user, onCommentCreated }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, token } = useContext(AuthContext);
  if (!user) return null;
  const maxLength = 500;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (comment.trim().length < 3) {
      setError("El comentario debe tener al menos 3 caracteres.");
      return;
    }

    if (haveBadWord(comment)) {
      setError("Tu comentario contiene palabras no permitidas.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      console.log(user.id);
      const response = await fetch(
        `http://localhost:8080/comments/${id_post}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            comment: comment.trim(),
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status}`);
      }

      const newComment = await response.json();

      if (onCommentCreated) await onCommentCreated();

      setComment("");
    } catch (err) {
      console.error(err);
      setError("Error al enviar el comentario. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 3,
        width: "100%",
      }}
    >
      <Typography variant="h6" sx={{ color: "white" }}>
        Deja un comentario
      </Typography>

      <TextField
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        multiline
        rows={3}
        placeholder="Escribe tu comentario..."
        variant="outlined"
        fullWidth
        error={!!error}
        helperText={error}
        slotProps={{ htmlInput: { maxLength } }}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "gray",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white",
          },
          "& .MuiFormHelperText-root": {
            color: "#ffcccc",
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        sx={{
          alignSelf: "flex-end",
          backgroundColor: "#1976d2",
          ":hover": { backgroundColor: "#115293" },
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Comentar"}
      </Button>
    </Box>
  );
};

export default CommentForm;