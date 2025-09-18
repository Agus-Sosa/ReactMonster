import { Box } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';

// data/posts.js
export const posts = [
  {
    id_post: 1,
    id_user: 1, // id del usuario dueño de la publicación
    date: "2025-09-12T18:00:00.000Z",
    content: "Esta es mi primera publicación en el foro 😎",
    total_like: 5,
    state_post: true,
    admin_decide: null, // si un admin la moderó
    image: "https://via.placeholder.com/40", // 👈 agregado para tu card
    title: "Publicación de prueba",
    description: "Una breve descripción de lo que trata la publicación"
  },
  {
    id_post: 2,
    id_user: 2,
    date: "2025-09-12T19:00:00.000Z",
    content: "Otra publicación para testear la vista de detalle 🔥",
    total_like: 12,
    state_post: true,
    admin_decide: null,
    image: "https://via.placeholder.com/40",
    titulo: "Segunda publicación",
    description: "Descripción corta de la segunda publicación"
  }
];


const DetailPublish = () => {
    const {id} = useParams();
    const post = posts.find((p)=> p.id_post  === parseInt(id));

  return (
    <Box component="section">
        <Box component="h1">{post.title}</Box>
        <Box component="header">
            <Box component="img" ></Box>
            <Box component="h4"></Box>
        </Box>
        <Box component="div">
            {post.content}
        </Box>
    </Box>

)
}

export default DetailPublish