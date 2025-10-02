import { useState, useEffect, useContext } from "react";
import { IconButton, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AuthContext } from '../../../context/AuthContext.jsx'

export default function LikeButton({ postId }) {
  const { user } = useContext(AuthContext); 

  if(!user) return null; // Si no hay usuario, no mostrar el botón
  const userId = user.id;
  
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
  if (!userId) return;

  try {
    const res = await fetch(`http://localhost:8080/likes/post/${postId}/user/${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`Error ${res.status}`);

    const data = await res.json(); 
    setLiked(data.liked);

    //If the user liked it, add +1, if they liked it, subtract -1
    setLikesCount((prev) => data.liked ? prev + 1 : prev - 1);
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
