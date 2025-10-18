import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { AuthContext } from "../../../context/AuthContext";

const CreatePost = ({ defaultCategory, onCancel, onCreated }) => {
  const { token, user } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [resume, setResume] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(defaultCategory || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar categorías");
        return res.json();
      })
      .then((data) => setCategories(data.categorias))
      .catch((err) => setError(err.message));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token || !user?.id) {
      setError("Debes iniciar sesión para crear un post");
      return;
    }
    if (!title.trim() || !resume.trim() || !content.trim()) {
      setError("Título, resumen y contenido son obligatorios");
      return;
    }
    if (!categoryId) {
      setError("Selecciona una categoría");
      return;
    }

    setLoading(true);
    setError("");

    const payload = {
      title: title.trim(),
      resume: resume.trim(),
      content: content.trim(),
      id_category: categoryId
    };

    console.log("CreatePost → payload con JWT:", payload);

    try {
      const res = await fetch("http://localhost:8080/post/newPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error creando el post");
      await res.json();
      onCreated();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const selectedCat = categories.find((c) => c.id_category === defaultCategory);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        bgcolor: "#2a2a2a",
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Nuevo Post</Typography>
        <Button size="small" onClick={onCancel}>X</Button>
      </Box>

      <TextField label="Título" value={title} onChange={(e) => setTitle(e.target.value)} required fullWidth />
      <TextField label="Resumen" value={resume} onChange={(e) => setResume(e.target.value)} required fullWidth />
      <TextField label="Contenido" value={content} onChange={(e) => setContent(e.target.value)} required multiline rows={4} fullWidth />

      {defaultCategory ? (
        <TextField label="Categoría" value={selectedCat?.title || ""} disabled fullWidth />
      ) : (
        <FormControl fullWidth required>
          <InputLabel id="label-categoria">Categoría</InputLabel>
          <Select
            labelId="label-categoria"
            value={categoryId}
            label="Categoría"
            onChange={(e) => setCategoryId(e.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id_category} value={cat.id_category}>
                {cat.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {error && (
        <Typography color="error" variant="body2">{error}</Typography>
      )}

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
        <Button variant="outlined" onClick={onCancel}>Cancelar</Button>
        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? "Creando…" : "Crear Post"}
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePost;
