import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Joins from "./joins";
import forumtexture from "../../../assets/img/foro-bck.png";

function ForoJoins({ info }) {
  const rute = info.pathname;


  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState(null);

  const text_to_route = rute.replace("/", "/ ").toUpperCase();

  // trae las categorias al cargar
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("http://localhost:8080/categories/");
        if (!res.ok) throw new Error("Error al obtener categorias");
        const data = await res.json();
        setCategories(data.categorias);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingCategories(false);
      }
    }
    fetchCategories();
  }, []);

  // cuando seleccion una categ trae los post
  const handleSelectCategory = async (category) => {
    setSelectedCategory(category);
    setSelectedPost(null);
    setLoadingPosts(true);
    setError(null);

    try {
      const res = await fetch(`https://tu-api.com/categorias/${category.id}/posts`);
      if (!res.ok) throw new Error("Error al obtener posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
      setPosts([]);
    } finally {
      setLoadingPosts(false);
    }
  };

  // ver el post completo
  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  // tengo que mejorar esto, despues de que funque lo reviso
  if (loadingCategories) return <p style={{ color: "white" }}>Cargando categorías...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${forumtexture})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1a1a1a",
        backgroundBlendMode: "color-dodge",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "85vh",
          width: "80%",
          color: "white",
        }}
      >
        <Box sx={{ fontSize: "1.2em", width: "100%", marginLeft: "6%" }}>
          <h2>
            Comunidad {text_to_route}
            {selectedCategory && ` / ${selectedCategory.titulo}`}
            {selectedPost && ` / ${selectedPost.titulo}`}
          </h2>
        </Box>

        <Box sx={{ flexDirection: "column", display: "flex", margin: "5%" }}>
          {/* categorias*/}
          {!selectedCategory &&
            categories.map((cat) => (
              <Joins
                key={cat.id}
                informacion={cat}
                onSelect={handleSelectCategory}
              />
            ))}

          {/* post de la catg seleccionada*/}
          {selectedCategory && !selectedPost && (
            loadingPosts ? (
              <p style={{ color: "white" }}>Cargando posts...</p>
            ) : (
              posts.map((post) => (
                <Joins
                  key={post.id}
                  informacion={post}
                  onSelect={handleSelectPost}
                />
              ))
            )
          )}
        </Box>

        {/*view post*/}
        {selectedPost && (
          <Box sx={{ marginTop: "20px" }}>
            <h3>{selectedPost.titulo}</h3>
            <p>{selectedPost.description}</p>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ForoJoins;
