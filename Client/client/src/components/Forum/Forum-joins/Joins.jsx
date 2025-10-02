import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import "./joins.css";

function Joins({ informacion, onSelect }) {


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
      // The ?. prevents error if onSelect is not defined
      onClick={() => onSelect?.(informacion)}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <img
              src={informacion.imageUrl}
              className="forum-icons"
              alt={`icono de ${informacion.title}`}
            />
            {informacion.title}
          </Typography>
          {/* Summary / short description */}
          <Typography variant="body2" sx={{ color: "white" }}>
            {informacion.resume}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Joins;