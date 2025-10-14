import React, { useEffect, useState, useContext } from "react";
import { Typography, Box } from "@mui/material";
import Comments from "./Comments";
import Loading from "../../LoadingComp/Loading";
import CommentForm from "./CreateComment.jsx";
import { AuthContext } from "../../../context/AuthContext.jsx";
import LoginRequired from "../../NeedLogin/NeedLogin.jsx";

function CommentsSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  if (!user) return <LoginRequired />;

  const userId = user.id_user; 

  const fetchComments = async () => {
  try {
    const res = await fetch(`http://localhost:8080/comments/${postId.id_post}`);
    if (!res.ok) throw new Error("Error al cargar comentarios");
    const data = await res.json();
    setComments(data);
  } catch (err) {
    console.error(err);
  }
};

  useEffect(() => {
    if (!postId) return; 
    fetch(`http://localhost:8080/comments/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : []; 
        setComments(arr);
        setLoading(false);
        fetchComments();
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setLoading(false);
      });
  }, [postId.id_post]);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: 2,
        padding: 2,
        backgroundColor: "transparent",
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
        Comentarios
      </Typography>

      {loading ? (
        <Loading />
      ) : (
        <>
          <Comments comment={comments}/>
          <CommentForm
            id_post={postId}   
            id_user={userId}
            onCommentCreated={fetchComments}
          />
        </>
      )}
    </Box>
  );
}

export default CommentsSection;
