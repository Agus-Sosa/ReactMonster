import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography
} from "@mui/material";

function Comments({comment}) {
  console.log(comment[0])
  return (
    <>
    {comment.map((comment) => (
        <Card key={comment.id} sx={{Width: "100%", mb: 2 , backgroundColor:"transparent", color:"White"}}>
          <CardHeader
            avatar={
              <Avatar aria-label="usuario">
                {comment.User.user_name ? comment.User.user_name[0].toUpperCase() : "?"}
              </Avatar>
            }
            sx={{ color:"White"}}
            // falta agregar la opcion de traer la informacion de quien es el mensaje
            title={comment.User.user_name || "anonimo"}
            subheader={comment.date || "Sin fecha"}
          />
          <CardContent>
            <Typography variant="body2" color="White">
              {comment.comment || comment.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default Comments