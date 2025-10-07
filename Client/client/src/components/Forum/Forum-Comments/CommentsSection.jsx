import React, { useEffect, useState,useContext } from 'react'
import { Typography, Box } from "@mui/material";
import Comments from './Comments';
import Loading from '../../LoadingComp/Loading';
import CommentForm from './CreateComment.jsx';
import { AuthContext } from '../../../context/AuthContext.jsx'
import LoginRequired from '../../NeedLogin/NeedLogin.jsx';

function CommentsSection({postId}) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext); 
    if(!user) return <><LoginRequired/></>;
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
      sx={{
        p: 3,
        borderRadius: 2,
        border: '1px dashed',
        borderColor: 'divider',
        textAlign: 'center',
        bgcolor: (theme) => theme.palette.action.hover,
      }}
    >
      <Stack spacing={1.5} alignItems="center">
        <LockOutlinedIcon color="action" />
        <Typography variant="body1">
          Debes estar logueado para ver este contenido.
        </Typography>
        <Button variant="contained" size="small" onClick={() => navigate('/login')}>
          Iniciar sesión
        </Button>
      </Stack>
    </Box>
  );
};

export default CommentsSection;