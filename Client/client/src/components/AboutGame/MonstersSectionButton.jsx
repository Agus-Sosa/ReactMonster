import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MonstersSectionButton = ({ text, onClick }) => {

    const navigate = useNavigate();
    
    const handleClick = () => {
     navigate("/monsters");
    };

  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        mt: 3,
        bgcolor: "#1C1C1C", 
        "&:hover": { bgcolor: "#333333" },
        borderRadius: "6px",
        px: 3,
        py: 1,
        fontWeight: "bold",
        textTransform: "none",
        color: "#F0E6D2", 
      }}
    >
      {text}
    </Button>
  );
};

export default MonstersSectionButton;
