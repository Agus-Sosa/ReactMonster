import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const CreatePostForm = ({ categoryId, userId, onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryId || !userId) {
      return alert("Falta categoría o usuario para crear la publicación.");
    }

    setLoading(true);

    try {
      const res = await fetch("/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          resume,
          content,
          id_user: userId,
          id_category: categoryId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Error en backend al crear post:", data);
        throw new Error(data.error || "Error desconocido al crear publicación");
      }

      onPostCreated(data);
      setTitle("");
      setResume("");
      setContent("");
    } catch (err) {
      console.error("Error al crear publicación:", err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        fullWidth
        label="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Resumen"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Contenido"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        sx={{ mb: 2 }}
      />
      <Button variant="contained" type="submit" disabled={loading}>
        {loading ? "Publicando..." : "Publicar"}
      </Button>
    </Box>
  );
};

export default CreatePostForm;
