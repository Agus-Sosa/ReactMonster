import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

function CreatePostForm({ idCategory, onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/post/newPost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, id_category: idCategory }),
      });
      if (!res.ok) throw new Error("Error creating post");
      const newPost = await res.json();
      onPostCreated?.(newPost);
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Error creating post:", err);
      alert("There was an error creating the post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginBottom: 3,
      }}
    >
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: 2 }}
        required
      />
      <TextField
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        multiline
        rows={4}
        sx={{ marginBottom: 2 }}
        required
      />
      <Button type="submit" variant="contained" disabled={loading}>
        {loading ? "Publishing..." : "Publish"}
      </Button>
    </Box>
  );
}

export default CreatePostForm;
