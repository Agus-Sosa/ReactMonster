import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Paper,
  Divider,
  Fade,
} from "@mui/material";
import Joins from "./Joins.jsx";
import forumtexture from "../../../assets/img/foro-bck.png";
import Loading from "../../LoadingComp/Loading";
import ErrorComp from "../../ErrorComp/ErrorComp.jsx";
import DetailPublish from "../detailPublic/DetailPublish.jsx";
import CommentsSection from "../Forum-Comments/CommentsSection.jsx";
import CreatePost from "../../Forum/Forum-Posts/CreatePost.jsx";
import ModalAuthPrev from "../../Authentication/ModalAuthPrev";
import LoginRequired from "../../NeedLogin/NeedLogin.jsx";
import { AuthContext } from "../../../context/AuthContext";

function ForoJoins({ info }) {
  const ruta = info.pathname;
  const { user } = useContext(AuthContext);

  /*---- MAIN STATES ----*/
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  /*---- CONTROL STATES ----*/
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false); 
  const text_to_route = ruta.replace("/", "/ ").toUpperCase();

  /*---- FETCH CATEGORIES ----*/
  useEffect(() => {
    fetch("http://localhost:8080/categories")
      .then(res => {
        if (!res.ok) throw new Error("Error al obtener categorias");
        return res.json();
      })
      .then(data => setCategories(data.categorias))
      .catch(err => setError(err.message))
      .finally(() => setLoadingCategories(false));
  }, []);

  /*---- FETCH POSTS BY CATEGORY ----*/
  const handleSelectCategory = async cat => {
    setSelectedCategory(cat);
    setSelectedPost(null);
    setLoadingPosts(true);
    setError(null);

    try {
      const res = await fetch(`http://localhost:8080/post/categorias/${cat.id_category}`);
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

  /*---- SELECT POST ----*/
  const handleSelectPost = post => {
    setSelectedPost(post);
  };

  //  filter deleted posts only for regular users
  const visiblePosts = posts.filter(post => {
    if (!user) return post.deleted === false;
    if (user.role === "admin" || user.role === "superadmin") return true;
    return post.deleted === false;
  });

  /*---- CONDITIONAL RENDERING ----*/
  if (!user) return <LoginRequired />;
  if (loadingCategories) return <Loading />;
  if (error) return <ErrorComp />;

  return (
     <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(10,10,10,0.85), rgba(10,10,10,0.85)), url(${forumtexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        paddingY: 6,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: { xs: "95%", md: "80%" },
          minHeight: "80vh",
          backgroundColor: "rgba(30,30,30,0.9)",
          backdropFilter: "blur(8px)",
          borderRadius: 3,
          color: "white",
          padding: { xs: 3, md: 5 },
        }}
      >
        {/* ---------- HEADER ---------- */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mb: 3,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Comunidad {text_to_route}
            {selectedCategory && ` / ${selectedCategory.title}`}
            {selectedPost && ` / ${selectedPost.title}`}
          </Typography>

          {selectedCategory && !selectedPost && !showCreateForm && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowCreateForm(true)}
              sx={{
                fontWeight: "bold",
                borderRadius: "10px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              Crear nuevo post
            </Button>
          )}
        </Box>

        <Divider sx={{ mb: 4, borderColor: "rgba(255,255,255,0.2)" }} />

        {/* ---------- main content ---------- */}
        {showCreateForm ? (
          <Fade in={showCreateForm}>
            <Box>
              <CreatePost
                defaultCategory={selectedCategory.id_category}
                onCancel={() => setShowCreateForm(false)}
                onCreated={() => {
                  setShowCreateForm(false);
                  handleSelectCategory(selectedCategory);
                }}
              />
            </Box>
          </Fade>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {!selectedCategory &&
              categories.map((cat) => (
                <Joins
                  key={cat.id_category}
                  informacion={cat}
                  onSelect={handleSelectCategory}
                />
              ))}

            {selectedCategory && !selectedPost && (
              loadingPosts ? (
                <CircularProgress sx={{ alignSelf: "center", mt: 4 }} />
              ) : visiblePosts.length ? (
                visiblePosts.map((post) => (
                  <Joins
                    key={post.id_post}
                    informacion={post}
                    onSelect={handleSelectPost}
                    onRefresh={() => handleSelectCategory(selectedCategory)}
                  />
                ))
              ) : (
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", opacity: 0.8, mt: 4 }}
                >
                  No hay publicaciones todavía.
                </Typography>
              )
            )}
          </Box>
        )}

        {/* ---------- post detail ---------- */}
        {selectedPost && (
          <Fade in={!!selectedPost}>
            <Box sx={{ mt: 4 }}>
              <DetailPublish post={selectedPost} creator={selectedPost.User} />
              <CommentsSection postId={selectedPost} />
            </Box>
          </Fade>
        )}

        <ModalAuthPrev
          openModal={showAuthModal}
          handleCloseModal={() => setShowAuthModal(false)}
        />
      </Paper>
    </Box>
  );
}

export default ForoJoins;
