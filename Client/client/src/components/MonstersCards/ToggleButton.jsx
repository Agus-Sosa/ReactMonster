import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ToggleButton = ({ open, onToggle }) => {
  return (
    <IconButton
      onClick={onToggle}
      sx={{
        backgroundColor: "rgba(0,0,0,0.6)",
        color: "white",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
      }}
    >
      {open ? <RemoveIcon /> : <AddIcon />}
    </IconButton>
  );
};

export default ToggleButton;
