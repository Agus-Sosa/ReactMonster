import React from "react";
import { Button } from "@mui/material";

const ArenaButton = ({ text, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        mt: 3,
        bgcolor: "#3B1F0B",
        "&:hover": { bgcolor: "#5a2e12" },
        borderRadius: "20px",
        px: 3,
        py: 1,
        fontWeight: "bold",
        textTransform: "none", 
      }}
    >
      {text}
    </Button>
  );
};

export default ArenaButton;
