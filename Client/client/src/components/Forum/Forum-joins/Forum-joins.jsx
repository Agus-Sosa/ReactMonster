import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Joins from "./joins";
import forumtexture from "../../../assets/img/foro-bck.png";
import { CircularProgress } from '@mui/material';
import Loading from "../../LoadingComp/Loading";
import ErrorComp from "../../ErrorComp/ErrorComp.jsx";
import DetailPublish from "../detailPublic/DetailPublish.jsx";
import CommentsSection from "../Forum-Comments/CommentsSection.jsx";
/*lo di todo comentando en ingles. */
function ForoJoins({ info }) {
  const rute = info.pathname;

  /*---- MAIN STATES ---- */
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  /*---- CONTROL STATES ---- */
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState(null);
  /*---- SHOW THE INITIAL ROUTE (MAYBE NOT SO NECESSARY) ----*/
  const text_to_route = rute.replace("/", "/ ").toUpperCase();
 
  // USE EFFECT: LOAD CATEGORIES AT START
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("http://localhost:8080/categories");
        if (!res.ok) throw new Error("Error al obtener categorias");
        const data = await res.json();
        setCategories(data.categorias); // the API returns an object
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingCategories(false); // stops showing loading
      }
    }
    fetchCategories();
  }, []);

  // HANDLER: WHEN SELECTING A CATEGORY
  const handleSelectCategory = async (category) => {
    setSelectedCategory(category); //I save the chosen category
    setSelectedPost(null); // clear the selected post
    setLoadingPosts(true); //  show post spinner
    setError(null); // clean previous errors
    
    
    
    try {
      const res = await fetch(`http://localhost:8080/post/categorias/${category.id_category}`);
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

  // HANDLER: WHEN SELECTING A POST
  const handleSelectPost = (post) => {
    setSelectedPost(post); // show details of the post
    
  };

  // CONDITIONAL RENDER: LOADING / ERROR
  if (loadingCategories){return (
    <Loading/>
  )} 
    
    

  if (error) {
    return (
      <ErrorComp/>

    )
  }
// ---------- MAIN RENDER ----------
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
        <Box sx={{ fontSize: "1.2em", width: "100%", marginLeft: "6%" }}>
          <h2>
            Comunidad {text_to_route}
            {selectedCategory && ` / ${selectedCategory.title}`}
            {selectedPost && ` / ${selectedPost.title}`}
          </h2>
        </Box>
        {/* ---------- LIST OF CATEGORIES OR POSTS ---------- */}
        <Box sx={{ flexDirection: "column", display: "flex", margin: "5%" }}>
          {/* list of categories */}
          {!selectedCategory &&
            categories.map((cat) => (
              <Joins
                key={cat.id_category}
                informacion={cat}
                onSelect={handleSelectCategory}
              />
            ))}

          {/* list of posts within a category */}
          {selectedCategory && !selectedPost && (
            loadingPosts ? (
              <CircularProgress />
            ) : (
              posts.map((post) => (
                <Joins
                  key={post.idPost}
                  informacion={post}
                  onSelect={handleSelectPost}
                />
              ))
            )
          )}
        </Box>

        {/* ---------- POST DETAILS ---------- */}
        {selectedPost && (
          <Box sx={{ marginTop: "20px" }}>
            <DetailPublish post={selectedPost}/>  
            <CommentsSection/>          
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ForoJoins;
