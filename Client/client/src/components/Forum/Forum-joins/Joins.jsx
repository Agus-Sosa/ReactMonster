import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import "./joins.css";

function Joins({ informacion, onSelect }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onSelect) {
      onSelect(informacion); 
    } else {
      navigate(`/foro/${informacion.id}`); 
    }
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "95px",
        margin: "20px",
        backgroundColor: "transparent",
        color: "white",
        border: "1px solid white",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <img
              src={informacion.image}
              className="forum-icons"
              alt="icono de tarjeta"
            />
            {informacion.titulo}
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            {informacion.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Joins;