import { useState, useEffect, useContext } from "react";
import { IconButton, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AuthContext } from '../../../context/AuthContext.jsx'

export default function LikeButton({ postId }) {
  const { user } = useContext(AuthContext); 
  const userId = user?.id ? Number(user.id) : null;
 console.log(userId)

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  //Load the number of likes when mounting
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const resLikes = await fetch(`http://localhost:8080/likes/${postId}`);
        const dataLikes = await resLikes.json();
        setLikesCount(dataLikes.likes);
      } catch (err) {
        console.error("Error cargando likes:", err);
      }
    };

    fetchLikes();
  }, [postId]);

  // toggle like
  const handleToggleLike = async () => {
    if (!userId) {
      console.error("No hay usuario logueado");
      return;
    }

    try {
      const res = await fetch(`http://localhost:8080/likes/${postId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": userId,
        },
      });

      if (!res.ok) throw new Error(`Error ${res.status}`);

      const data = await res.json(); 
      setLiked(data.liked);
      setLikesCount(data.count);
    } catch (err) {
      console.error("Error toggling like:", err);
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton
        onClick={handleToggleLike}
        color={liked ? "error" : "default"}
      >
        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <Typography variant="body2">{likesCount}</Typography>
    </Box>
  );
}
