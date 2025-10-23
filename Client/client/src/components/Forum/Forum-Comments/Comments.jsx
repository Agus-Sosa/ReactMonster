import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Box,
  Divider,
  Tooltip,
} from "@mui/material";
import { AuthContext } from "../../../context/AuthContext.jsx";
import DeleteCommentButton from "../../Buttons/BtnDelete/DeleteBtn.jsx";
import timeAgo from "./FormatedTime.js";

function Comments({ comment, post_id, onCommentDeleted }) {
  const { user } = useContext(AuthContext);

  if (!user) return null; 

 
      return (
        <Box sx={{ mt: 2 }}>
          {comment.map((commentary) => (
      
            <Card
              key={commentary.id_comment}
              elevation={1}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 2,
                color: "white",
                mb: 2,
                transition: "transform 0.2s ease, background 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    src={commentary.User.profile_picture}
                    alt={commentary.User.user_name}
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {commentary.User.user_name
                      ? commentary.User.user_name[0].toUpperCase()
                      : "?"}
                  </Avatar>
                }
                action={
                  user.id === commentary.id_user && (
                    <Tooltip title="Eliminar comentario">
                      <DeleteCommentButton
                        postId={post_id}
                        commentId={commentary.id_comment}
                        userId={commentary.id_user}
                        onDeleted={onCommentDeleted}
                      />
                    </Tooltip>
                  )
                }
                title={
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "0.95em",
                    }}
                  >
                    {commentary.User.user_name || "Anónimo Atormentado"}
                  </Typography>
                }
                subheader={
                  <Typography
                    sx={{
                      color: "#b0b0b0",
                      fontSize: "0.8em",
                    }}
                  >
                    {commentary.User.range || "Sin Rango"}
                  </Typography>
                }
              />

              <Divider
                variant="middle"
                sx={{ borderColor: "rgba(255,255,255,0.1)" }}
              />

              <CardContent sx={{ wordBreak: "break-word", pt: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#e0e0e0",
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.5,
                  }}
                >
                  {commentary.comment || "Comentario místico..."}
                </Typography>

                {/* little footer*/}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: 1.5,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "rgba(255,255,255,0.4)", fontStyle: "italic" }}
                  >
                    {timeAgo(commentary.date)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      );
    }

export default Comments;