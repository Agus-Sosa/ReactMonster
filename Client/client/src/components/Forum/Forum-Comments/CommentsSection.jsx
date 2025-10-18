import React, { useEffect, useState, useContext } from 'react';
import { Typography, Box, Pagination } from "@mui/material";
import Comments from './Comments';
import Loading from '../../LoadingComp/Loading';
import CommentForm from './CreateComment.jsx';
import { AuthContext } from '../../../context/AuthContext.jsx';
import LoginRequired from '../../NeedLogin/NeedLogin.jsx';

function CommentsSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);  
  const [totalPages, setTotalPages] = useState(1); 
  const { user } = useContext(AuthContext); 

  if (!user) return <LoginRequired />;

  const userId = user.id;

  const fetchComments = async (page = 1, limit = 5) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8080/comments/${postId.id_post}?page=${page}&limit=${limit}`);
      if (!res.ok) throw new Error("Error al cargar comentarios");
      const data = await res.json();
      setComments(data.comments);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments(page);
  }, [postId.id_post, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

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
        <Loading />
      ) : (
        <>
          <Comments
            comment={comments}
            post_id={postId.id_post}
            onCommentDeleted={() => fetchComments(page)}
          />
          {totalPages > 1 && (
            <Box display="flex" justifyContent="center" mt={2}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}
          <CommentForm
            id_post={postId.id_post}
            id_user={userId}
            onCommentCreated={() => fetchComments(page)}
          />

          
        </>
      )}
    </Box>
  );
}

export default CommentsSection;
