import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Modal, Button, Dialog, TextField, DialogActions, DialogTitle } from '@mui/material';
import Box from '@mui/material/Box';


export default function CardAdmin({ arena }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
  };
  const [carta, setcarta] = React.useState(false);
  const [confirmacion, setConfirmacion] = React.useState(false);
  const [formulario, setFormulario] = React.useState(false);
  const [imagen, setImagen] = React.useState(arena.arena_image_url);
  const [nombre, setNombre] = React.useState(arena.arena_name);
  const [descripcion, setDescripcion] = React.useState(arena.arena_description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/arenas/${arena.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          arena_image_url: imagen,
          arena_name: nombre,
          arena_description: descripcion
        })
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la arena");
      }

      const data = await response.json();
      console.log("Arena actualizada:", data);

      handleCloseForm(); // cerrar modal
      // opcional: refrescar datos en el front
      window.location.reload(); 
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleImagen = (e) => {
    setImagen(e.target.value)
  }

  const handleNombre = (e) => {
    setNombre(e.target.value)
  }

  const handleDescripcion = (e) => {
    setDescripcion(e.target.value)
  }


  const handleOpen = () => {
    setcarta(true);
  }
  const handleClose = () => {
    setcarta(false);
  }

  const handlecOpenConf = () => {
    setConfirmacion(true);
  }
  const handleCloseConf = () => {
    setConfirmacion(false);
  }

  const handlecOpenForm = () => {
    setFormulario(true);
  }
  const handleCloseForm = () => {
    setFormulario(false);
  }


  return (
    <>
      <Card sx={{ maxWidth: { xs: "100%", sm: 345 }, border: '1px solid #E3E0C3', backgroundColor: '#212121', textAlign: 'center', m: 1 }}>
        {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="250"
          image={arena.arena_image_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: "#E3E0C3", fontFamily: "Anton" }}>
            {arena.arena_name}
          </Typography>

          <Button
            variant="outlined"
            onClick={handleOpen}
            sx={{ mt: 1, borderColor: "#E3E0C3", color: "#E3E0C3", fontFamily: "Anton" }}
          >
            Leer descripción
          </Button>
          <Box>
            <Button
              variant="outlined"
              onClick={handlecOpenForm}
              sx={{ mt: 1, borderColor: "#E3E0C3", color: "#E3E0C3", fontFamily: "Anton" }}
            >
              editar
            </Button>

            <Button
              variant="outlined"
              onClick={handlecOpenConf}
              sx={{ mt: 1, borderColor: "#E3E0C3", color: "#E3E0C3", fontFamily: "Anton" }}
            >
              eliminar
            </Button>
          </Box>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>



      <Modal
        open={carta}
        onClose={handleClose}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400 },
          bgcolor: '#212121',
          border: '1px solid #E3E0C3',
          boxShadow: 24,
          p: { xs: 2, sm: 4 },
          borderRadius: '10px'
        }}>

          <CardMedia
            component="img"
            height="325"
            image={arena.arena_image_url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#E3E0C3", fontFamily: "Anton", fontSize: { xs: '18px', sm: '25px' }, textAlign: 'center' }}>
              {arena.arena_name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#E3E0C3", fontFamily: "Anton", fontSize: '17px' }}>
              {arena.arena_description}
            </Typography>
          </CardContent>
        </Box>
      </Modal>


      <Dialog open={confirmacion} onClose={handleCloseConf}>
        <DialogTitle>{"¿Estás seguro de que querés eliminar esta arena?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseConf} color="primary">
            Cancelar
          </Button>
          <Button color="error" autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>

      <Modal open={formulario} onClose={handleCloseForm}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2
          }}
        >
          <TextField
            label="Imagen"
            name="image_url"
            value={imagen}
            onChange={handleImagen}
            fullWidth
          />
          <TextField
            label="Nombre"
            name="name"
            value={nombre}
            onChange={handleNombre}
            fullWidth
          />
          <TextField
            label="Descripción"
            name="description"
            value={descripcion}
            onChange={handleDescripcion}
            fullWidth
            multiline
          />

          <Button variant="contained" onClick={handleSubmit} >
            Guardar
          </Button>
        </Box>
      </Modal>


    </>
  );
}