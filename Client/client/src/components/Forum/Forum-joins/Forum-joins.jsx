import React, { useState, useEffect } from "react";
import { Box, Button, CircularProgress } from "@mui/material";

import Joins from "./Joins";
import forumtexture from "../../../assets/img/foro-bck.png";
import Loading from "../../LoadingComp/Loading";
import ErrorComp from "../../ErrorComp/ErrorComp.jsx";
import DetailPublish from "../detailPublic/DetailPublish.jsx";
import CommentsSection from "../Forum-Comments/CommentsSection.jsx";
import CreatePostForm from "../Forum-CreatePost/CreatePostForm.jsx";

function ForoJoins({ info, externalPosts = [] }) {
  const rute = info.pathname;

  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState(null);

  const text_to_route = rute.replace("/", "/ ").toUpperCase();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("http://localhost:8080/categories");
        if (!res.ok) throw new Error("Error fetching categories");
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

  const handleSelectCategory = async (category) => {
    setSelectedCategory(category);
    setSelectedPost(null);
    setLoadingPosts(true);
    setError(null);

    try {
      const res = await fetch(`http://localhost:8080/post/categories/${category.id_category}`);
      if (!res.ok) throw new Error("Error fetching posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
      setPosts([]);
    } finally {
      setLoadingPosts(false);
    }
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

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
        <Box sx={{ fontSize: "1.2em", width: "100%", marginLeft: "6%" }}>
          <h2>
            Comunidad {text_to_route}
            {selectedCategory && ` / ${selectedCategory.title}`}
            {selectedPost && ` / ${selectedPost.title}`}
          </h2>
        </Box>

        <Box sx={{ flexDirection: "column", display: "flex", margin: "5%" }}>
          {!selectedCategory &&
            categories.map((cat) => (
              <Joins
                key={cat.id_category}
                informacion={cat}
                onSelect={handleSelectCategory}
              />
            ))}

          {selectedCategory && !selectedPost && (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setShowForm((prev) => !prev)}
                sx={{ marginY: 2 }}
              >
                {showForm ? "Close form" : "Create new post"}
              </Button>

              {showForm && (
                <CreatePostForm
                  idCategory={selectedCategory.id_category}
                  onPostCreated={(newPost) => setPosts((prev) => [newPost, ...prev])}
                />
              )}

              {loadingPosts ? (
                <CircularProgress />
              ) : (
                posts.map((post) => (
                  <Joins
                    key={post.id_post}
                    informacion={post}
                    onSelect={handleSelectPost}
                  />
                ))
              )}
            </>
          )}
        </Box>

        {selectedPost && (
          <Box sx={{ marginTop: "20px" }}>
            <DetailPublish post={selectedPost} />
            <CommentsSection postId={selectedPost.id_post} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ForoJoins;
