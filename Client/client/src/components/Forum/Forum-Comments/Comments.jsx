import React, { useContext } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography
} from "@mui/material";
import { AuthContext } from '../../../context/AuthContext.jsx'
function Comments({comment}) {
  
  const { user } = useContext(AuthContext); 

  
  if(!user) return null; // If there is no user, do not show the button
  return (
    <>
    {comment.map((comment) => (
        <Card key={comment.id_comment} sx={{Width: "100%", mb: 2 , backgroundColor:"transparent", color:"White"}}>
          <CardHeader
            //I put the first letter of profile
            avatar={
              <Avatar aria-label="usuario">
                {comment.User.user_name ? comment.User.user_name[0].toUpperCase() : "?"}
              </Avatar>
            }
            sx={{ color:"White"}}
            title={
                <Typography sx={{ color: "white", fontWeight: "bold",  fontSize:"1em", wordBreak: "break-word", }}>
                  {comment.User.user_name || "Anónimo Atormentado"}
                </Typography>
              }
             subheader={
            <Typography sx={{ color: "#9e9e9e",wordBreak: "break-word"  }}>
              {comment.User.range || "Sin Rango"}
            </Typography>}
          />
          <CardContent sx={{ wordBreak: "break-word"}}>
            <Typography variant="body2" color="White" sx={{wordBreak: "break-word", whiteSpace: "pre-wrap"}}>
              {comment.comment || comment.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default Comments