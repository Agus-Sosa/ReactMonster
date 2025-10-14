import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import ForoJoins from "../components/Forum/Forum-joins/Forum-joins";

const Foro = () => {
  const location = useLocation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/post/allposts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <ForoJoins info={location} externalPosts={posts} />
    </Box>
  );
};

export default Foro;
