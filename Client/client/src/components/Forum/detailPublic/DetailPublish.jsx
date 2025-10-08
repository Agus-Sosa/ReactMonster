import { Box } from '@mui/material';
import React from 'react'
import LikeButton from '../../Buttons/LikeBtn/LikeBtn.jsx';
import ReportButton from '../../Buttons/ReportBtn/ReportButton.jsx'


const DetailPublish = ({post}) => {

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
        <Box component="div">
            {post.content}
        </Box>
        <Box component="h5">
          <LikeButton postId={post.id_post}/>
          <ReportButton/>
          </Box>
        
    </Box>
    

)
}

export default DetailPublish