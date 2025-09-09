import React, { useState } from "react";
import { Box } from "@mui/system";
import Joins from "./joins";
import forumtexture from "../../../assets/img/foro-bck.png";
import POST from "./post"; 

function ForoJoins({ info, data }) {
  const rute = info.pathname;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  let text_to_route = rute.replace("/", "/ ").toUpperCase();

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedPost(null); 
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

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
          {!selectedCategory &&
            data.map((cat) => (
              <Joins
                key={cat.id}
                informacion={cat}
                onSelect={handleSelectCategory}
              />
            ))}

          {selectedCategory &&
            !selectedPost &&
            POST.map((post) => (
              <Joins
                key={post.id}
                informacion={post}
                onSelect={handleSelectPost}
              />
            ))}
        </Box>
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
