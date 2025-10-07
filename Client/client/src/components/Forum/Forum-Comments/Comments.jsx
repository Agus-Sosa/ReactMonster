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
            //I put the first letter of profile
            avatar={
              <Avatar aria-label="usuario">
                {comment.User.user_name ? comment.User.user_name[0].toUpperCase() : "?"}
              </Avatar>
            }
            sx={{ color:"White"}}
            title={
                <Typography sx={{ color: "white", fontWeight: "bold",  fontSize:"1em"}}>
                  {comment.User.user_name || "Anónimo Atormentado"}
                </Typography>
              }
             subheader={
            <Typography sx={{ color: "#9e9e9e" }}>
              {comment.User.range || "Sin Rango"}
            </Typography>}
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