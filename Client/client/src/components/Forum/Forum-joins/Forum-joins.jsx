import React, { useState, useEffect, useContext } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import Joins from "./joins";
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
        {/* ---------- HEADER ---------- */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "1.2em",
            width: "100%",
            marginLeft: "6%",
          }}
        >
          <h2>
            Comunidad {text_to_route}
            {selectedCategory && ` / ${selectedCategory.title}`}
            {selectedPost && ` / ${selectedPost.title}`}
          </h2>

          {selectedCategory && !selectedPost && !showCreateForm && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowCreateForm(true)}
            >
              Crear Post
            </Button>
          )}
        </Box>

        {/* ---------- INLINE FORM o LISTADO ---------- */}
        {showCreateForm ? (
          <Box sx={{ margin: "20px 6%", width: "88%" }}>
            <CreatePost
              defaultCategory={selectedCategory.id_category}
              onCancel={() => setShowCreateForm(false)}
              onCreated={() => {
                setShowCreateForm(false);
                handleSelectCategory(selectedCategory);
              }}
            />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "5%",
              wordBreak: "break-word",
            }}
          >
            {!selectedCategory &&
              categories.map(cat => (
                <Joins
                  key={cat.id_category}
                  informacion={cat}
                  onSelect={handleSelectCategory}
                />
              ))}

            {selectedCategory && !selectedPost && (
              loadingPosts ? (
                <CircularProgress />
              ) : (
                visiblePosts.map(post => (
                  <Joins
                    key={post.id_post}
                    informacion={post}
                    onSelect={handleSelectPost}
                    onRefresh={() => handleSelectCategory(selectedCategory)}
                  />
                ))
              )
            )}
          </Box>
        )}

        {/* ---------- DETAILS + COMMENTS ---------- */}
        {selectedPost && (
          <Box sx={{ marginTop: "20px" }}>
            <DetailPublish post={selectedPost} creator={selectedPost.User} />
            <CommentsSection postId={selectedPost} />
          </Box>
        )}

        {/* ---------- MODAL AUTH ---------- */}
        <ModalAuthPrev
          openModal={showAuthModal}
          handleCloseModal={() => setShowAuthModal(false)}
        />
      </Box>
    </Box>
  );
}

export default ForoJoins;
