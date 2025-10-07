import React ,{useContext} from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { AuthContext } from '../../../context/AuthContext.jsx'

/*
TODAVIA NO FUNCIONA ES UN TESTE NO IMPORTAR A NINGUN LADO PORQUE LES PUEDE ROMPER TODOOO

*/
const ReportButton = ({
  onClick = () => {},
  tooltip = "Reportar contenido",
  position = "right",
}) => {

    const { user } = useContext(AuthContext); 
    if(!user) return null;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: position === "right" ? "flex-end" : "flex-start",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Tooltip title={tooltip} arrow>
        <IconButton
          onClick={onClick}
          size="small"
          color="error"
          sx={{
            backgroundColor: "error.light",
            "&:hover": {
              backgroundColor: "error.main",
              color: "#fff",
            },
            transition: "all 0.2s ease-in-out",
          }}
        >
          <FlagOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ReportButton;

