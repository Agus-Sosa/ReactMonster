import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography
} from "@mui/material";

function Comments({comment}) {
  return (
    <>
     {comment.map((comment) => (
        <Card key={comment.id} sx={{ maxWidth: 500, mb: 2 }}>
          <CardHeader
            avatar={
              <Avatar aria-label="usuario">
                {comment.name ? comment.name[0].toUpperCase() : "?"}
              </Avatar>
            }
            title={comment.name || "Anonimo"}
            subheader={comment.date || "Sin fecha"}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {comment.comment || comment.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default Comments