import * as React from 'react';
import { Modal, Button, Dialog, TextField, DialogActions, DialogTitle } from '@mui/material';
import Box from '@mui/material/Box';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';


export default function ButtonAdmin({ arena, fetchArenas }) {
    
  const [confirmacion, setConfirmacion] = React.useState(false);
  const [formulario, setFormulario] = React.useState(false);
  const [imagen, setImagen] = React.useState(arena.arena_image_url);
  const [nombre, setNombre] = React.useState(arena.arena_name);
  const [descripcion, setDescripcion] = React.useState(arena.arena_description);

  const { user, token } = React.useContext(AuthContext)
  const isAdmin = user?.role === 'admin' || user?.role === 'superadmin';
  if (!isAdmin) {
    return null;
  }
  const handleEliminar = async (e) => {
    e.preventDefault();
    try {
      const responsee = await fetch(`http://localhost:8080/arenas/${arena.id}`, {
        headers: {
          "Content-type":"application/json",
          "authorization":`bearer ${token}`
        },
        method: "delete"
      })
      if (responsee.ok) {
        toast.success('Arena eliminada correctamente.');
      }
      handleCloseConf();
      fetchArenas();

    } catch (error) {
      toast.error('Error al eliminar Arena.');
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !descripcion || !imagen || !nombre.trim() || !descripcion.trim() || !imagen.trim()) {
          toast.error("Se debe completar todos los campos antes de subir la arena.");
          return;
        }
    try {
      const response = await fetch(`http://localhost:8080/arenas/${arena.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization":`bearer ${token}`
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
      toast.success('Arena editada correctamente.');
      
      // cerrar modal
      handleCloseForm();
      fetchArenas();
      //refrescar datos en el front
      fetchArenas();
      
    } catch (err) {
      toast.error('Error al editar Arena');
      
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
    setNombre(arena.arena_name)
    setDescripcion(arena.arena_description)
    setImagen(arena.arena_image_url)
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
          <Button variant="contained" color="primary" onClick={handleCloseConf} >
            Cancelar
          </Button>
          <Button variant="contained" color="error" autoFocus onClick={handleEliminar}>
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
          <Button variant="contained" color="error" onClick={handleCloseForm}  >
            Cancelar
          </Button>
        </Box>
      </Modal>


    </>
  );
}


