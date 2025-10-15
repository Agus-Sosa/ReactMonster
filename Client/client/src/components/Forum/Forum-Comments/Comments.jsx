import React, { useContext } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography
} from "@mui/material";
import { AuthContext } from '../../../context/AuthContext.jsx';

function Comments({ comment = [] }) {
  const { user } = useContext(AuthContext);

  // If there is no logged-in user, do not render comments
  if (!user) return null;

  // Ensure we always work with an array
  if (!Array.isArray(comment)) return null;

  return (
    <>
      {comment.map((commentary) => {
        const userName = commentary?.User?.user_name || "Unknown User";
        const userRange = commentary?.User?.range || "No Rank";
        const content = commentary?.content || commentary?.comment || commentary?.body || "";

        return (
          <Card
            key={commentary.id_comment || Math.random()}
            sx={{
              width: "100%",
              mb: 2,
              backgroundColor: "transparent",
              color: "white"
            }}
          >
            <CardHeader
              // Avatar shows the first letter of the username
              avatar={
                <Avatar aria-label="user">
                  {userName[0]?.toUpperCase() || "?"}
                </Avatar>
              }
              sx={{ color: "white" }}
              title={
                <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "1em" }}>
                  {userName}
                </Typography>
              }
              subheader={
                <Typography sx={{ color: "#9e9e9e" }}>
                  {userRange}
                </Typography>
              }
            />
            <CardContent>
              <Typography variant="body2" color="white">
                {content}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}

export default Comments;
