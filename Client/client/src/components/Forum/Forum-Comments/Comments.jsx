import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";
import { AuthContext } from "../../../context/AuthContext.jsx";
import DeleteCommentButton from "../../Buttons/BtnDelete/DeleteBtn.jsx";
function Comments({ comment, post_id, onCommentDeleted }) {
  const { user } = useContext(AuthContext);

  if (!user) return null; // If there is no user, do not show the button

  return (
    <>
      {comment.map((commentary) => (
        <Card
          key={commentary.id_comment}
          sx={{
            Width: "100%",
            mb: 2,
            backgroundColor: "transparent",
            color: "White",
          }}
        >
          <CardHeader
            //I put the first letter of profile
            avatar={
              <Avatar
                aria-label="usuario"
                src={commentary.User.profile_picture}
              >
                {commentary.User.user_name
                  ? commentary.User.user_name[0].toUpperCase()
                  : "?"}
              </Avatar>
            }
            sx={{ color: "White" }}
            title={
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1em",
                  wordBreak: "break-word",
                }}
              >
                {commentary.User.user_name || "Anónimo Atormentado"}
              </Typography>
            }
            subheader={
              <Typography sx={{ color: "#9e9e9e", wordBreak: "break-word" }}>
                {commentary.User.range || "Sin Rango"}
              </Typography>
            }
          />
          <DeleteCommentButton
            postId={post_id}
            commentId={commentary.id_comment}
            userId={commentary.id_user}
            onDeleted={onCommentDeleted}
          />

          <CardContent sx={{ wordBreak: "break-word" }}>
            <Typography
              variant="body2"
              color="White"
              sx={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}
            >
              {commentary.comment || "Comentario Mistico"}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default Comments;