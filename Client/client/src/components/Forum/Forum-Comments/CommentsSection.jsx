import React, { useEffect, useState,useContext } from 'react'
import { Typography, Box } from "@mui/material";
import Comments from './Comments';
import Loading from '../../LoadingComp/Loading';
import CommentForm from './CreateComment.jsx';
import { AuthContext } from '../../../context/AuthContext.jsx'

function CommentsSection({postId}) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext); 
  const userId = user.id;
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
        <>
          <Comments comment={comments} />
          <CommentForm
            id_post={postId.id_post}
            id_user={userId}
            onCommentCreated={(newComment) =>
              setComments((prev) => [...prev, newComment])
            }
          />
        </>
        
      )}
    </Box>
  );
}

export default CommentsSection;