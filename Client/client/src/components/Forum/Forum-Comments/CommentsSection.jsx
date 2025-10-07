import React, { useEffect, useState } from 'react'
import { Typography, Box } from "@mui/material";
import Comments from './Comments';
import Loading from '../../LoadingComp/Loading';
function CommentsSection({postId}) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
    console.log(postId.id_post)
  useEffect(() => {
    fetch(`http://localhost:8080/comments/${postId.id_post}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        border: "1px solid #ccc",  
        borderRadius: 2,
        padding: 2,
        backgroundColor: "transparent"
      }}
    >
      <Typography 
        variant="subtitle1" 
        sx={{ fontWeight: "bold", mb: 1 }}
      >
        Comentarios
      </Typography>

      {loading ? (
        <Loading/>
      ) : (
        
          <Comments comment={comments} />
        
      )}
    </Box>
  );
}

export default CommentsSection;