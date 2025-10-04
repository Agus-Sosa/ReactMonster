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
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="usuario">M</Avatar>
        }
        title="Extraño Atormentado"
        subheader={comment.date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment.comment}
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default Comments