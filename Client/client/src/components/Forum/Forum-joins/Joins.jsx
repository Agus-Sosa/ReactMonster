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
        height: "auto",
        margin: "20px",
        backgroundColor: "transparent",
        color: "white",
        border: "1px solid white",
        cursor: "pointer",
        wordBreak: "break-word"
      }}
      // The ?. prevents error if onSelect is not defined
      onClick={() => onSelect?.(informacion)}
    >
      <CardActionArea>
        <CardContent sx={{wordBreak: "break-word"}}>
          <Typography gutterBottom variant="h5" component="div" >
            <img
              src={informacion.imageUrl}
              className="forum-icons"
              alt={`icono de ${informacion.title}`}
            />
            {informacion.title}
          </Typography>
          {/* Summary / short description */}
          <Typography variant="body2" sx={{ color: "white",wordBreak: "break-word" }}>
            {informacion.resume}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Joins;