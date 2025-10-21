import * as React from 'react';
import { Modal, Button, Dialog, TextField, DialogActions, DialogTitle } from '@mui/material';
import Box from '@mui/material/Box';
import { AuthContext } from '../../context/AuthContext';


export default function ButtonAdmin({ arena, fetchArenas }) {

    
  const [confirmacion, setConfirmacion] = React.useState(false);
  const [formulario, setFormulario] = React.useState(false);
  const [imagen, setImagen] = React.useState(arena.arena_image_url);
  const [nombre, setNombre] = React.useState(arena.arena_name);
  const [descripcion, setDescripcion] = React.useState(arena.arena_description);

  const { user } = React.useContext(AuthContext)
  const isAdmin = user?.role === 'admin' || user?.role === 'superadmin';
  if (!isAdmin) {
    return null;
  }
  const handleEliminar = async (e) => {
    e.preventDefault();
    try {
      const responsee = await fetch(`http://localhost:8080/arenas/${arena.id}`, {
        method: "delete"
      })
      if (responsee.ok) {
        alert("la arena se elimino con exito");
      }
      handleCloseConf();
      fetchArenas();
      // window.location.reload();

    } catch (error) {
      console.error("error:", error)
    }
  }


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
      // cerrar modal
      handleCloseForm();
      fetchArenas();
      //refrescar datos en el front
      // window.location.reload();
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
        


      <Dialog open={confirmacion} onClose={handleCloseConf}>
        <DialogTitle>{"¿Estás seguro de que querés eliminar esta arena?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseConf} color="primary">
            Cancelar
          </Button>
          <Button color="error" autoFocus onClick={handleEliminar}>
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


