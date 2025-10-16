import { Box,Avatar,CardHeader,Typography } from '@mui/material';
import React from 'react'
import LikeButton from '../../Buttons/LikeBtn/LikeBtn.jsx';


const DetailPublish = ({post, creator}) => {

  //i format the date because it is poorly saved in the DB.
  const d = new Date(post.date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  const formattedDate = `${day}/${m}/${y}`
  return (
    <Box component="section">
        <Box component="h1" sx={{fontSize:"3rem"}}>{post.title}</Box>
        <Box component="header">
            <Box component="img" src={post.imgContent}
            sx={{
            width: "100%",  
            height: "auto",    
            maxWidth: { xs: "100%", sm: "600px" }, 
            borderRadius: 2,   
          }}
          
        ></Box>
       
        
            <Box component="h4">{formattedDate}</Box>

      </Box>
      
        <Box component="div" sx={{ whiteSpace: 'pre-line', lineHeight: 1.6, fontSize: '1.1rem' }}>
            {post.content}
      </Box>
       
      <Box component="h5">
        <CardHeader
        avatar={
          <Avatar aria-label="usuario"
              src={creator.profile_picture}
            >
            </Avatar>
            }sx={{ color:"White"}}
          title={
              <Typography sx={{ color: "white", fontWeight: "bold",  fontSize:"1em", wordBreak: "break-word", }}>
                  {creator.user_name || "Anónimo Atormentado"}
                </Typography>
          }
        
        />
          <LikeButton postId={post.id_post}/>
          </Box>
        
    </Box>
    

)
}

export default DetailPublish