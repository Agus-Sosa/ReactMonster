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
  const [imageUrl, setImageUrl] = useState(""); 
  const isValidImageUrl = /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(imageUrl.trim()); 

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
      id_category: categoryId,
      id_user: user.id,
      ...(isValidImageUrl && { imgContent: imageUrl.trim() }) 
    };


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
        gap: 3,
        p: 4,
        bgcolor: "#1e1e1e",
        borderRadius: 3,
        boxShadow: 3,
        maxWidth: "700px",
        margin: "0 auto",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h5" fontWeight={600}>
          Nuevo Post
        </Typography>
        <Button size="small" onClick={onCancel} sx={{ color: "#ff0000ff" }}>
          x
        </Button>
      </Box>

      <TextField
        label="Título*"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
        variant="outlined"
        InputLabelProps={{ style: { color: "#aaa" } }}
        InputProps={{ style: { color: "white" } }}
      />

      <TextField
        label="Resumen*"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        required
        fullWidth
        variant="outlined"
        InputLabelProps={{ style: { color: "#aaa" } }}
        InputProps={{ style: { color: "white" } }}
      />

      <TextField
        label="Contenido*"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        multiline
        rows={6}
        fullWidth
        variant="outlined"
        InputLabelProps={{ style: { color: "#aaa" } }}
        InputProps={{ style: { color: "white" } }}
      />

      <TextField 
        label="URL de imagen (opcional)" 
        value={imageUrl} 
        onChange={(e) => setImageUrl(e.target.value)} 
        fullWidth 
        variant="outlined" 
        InputLabelProps={{ style: { color: "#aaa" } }} 
        InputProps={{ style: { color: "white" } }} 
      />

      {isValidImageUrl && ( 
        <Box sx={{ mt: 2, textAlign: "center" }}> 
          <Typography variant="body2" sx={{ mb: 1 }}>Vista Previa:</Typography> 
          <Box 
            component="img" 
            src={imageUrl.trim()} 
            alt="Preview" 
            sx={{ maxWidth: "100%", maxHeight: 300, borderRadius: 2 }} 
          /> 
        </Box>
      )} 

      {defaultCategory ? (
        <TextField
          label="Categoría"
          value={selectedCat?.title || ""}
          fullWidth
          variant="outlined"
          InputLabelProps={{ style: { color: "#aaa" } }}
          InputProps={{
            readOnly: true,
            style: { color: "white" }
          }}
        />
      ) : (
        <FormControl fullWidth required>
          <InputLabel id="label-categoria" sx={{ color: "#aaa" }}>Categoría</InputLabel>
          <Select
            labelId="label-categoria"
            value={categoryId}
            label="Categoría"
            onChange={(e) => setCategoryId(e.target.value)}
            sx={{ color: "white" }}
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
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button variant="outlined" onClick={onCancel} sx={{ color: "#ccc", borderColor: "#555" }}>
          Cancelar
        </Button>
        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? "Creando…" : "Crear Post"}
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePost;
