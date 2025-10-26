import React, { useState, useContext } from 'react';
import {
  IconButton,
  Tooltip,
  CircularProgress,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from '../../../context/AuthContext.jsx';
import { toast } from 'react-toastify';

const DeleteCommentButton = ({ postId, commentId, userId, onDeleted }) => {
  const { user, token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); 

  if (!user || (user.id !== userId && user.role !== 'admin')) return null;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirmDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8080/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error('Error al eliminar el comentario.');

      const data = await res.json();
      onDeleted?.(data);
      toast.success('Comentario eliminado correctamente.');
      handleClose();
    } catch (error) {     
      toast.error('No se pudo eliminar el comentario.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Tooltip title="Eliminar comentario">
        <span>
          <IconButton
            color="error"
            onClick={handleOpen}
            aria-label="eliminar comentario"
            size="small"
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : <DeleteIcon />}
          </IconButton>
        </span>
      </Tooltip>

      {/* modal to confirm deletion*/}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth sx={{backgroundColor: '#31313113'}}>
        <DialogTitle sx={{ fontWeight: 600, textAlign: 'center', backgroundColor: '#636161ff' }}>
          Eliminar comentario
        </DialogTitle>
        <DialogContent sx={{backgroundColor: '#313131ff', color:"white"}}>c
          <Typography align="center" sx={{ mt: 1 }}>
            ¿Seguro que querés eliminar este comentario? Esta acción no se puede deshacer.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', mb: 1,backgroundColor: '#313131ff', color:"white" }}>
          <Button onClick={handleClose} variant="outlined" color="inherit">
            Cancelar
          </Button>
          <Button
            onClick={handleConfirmDelete}
            variant="contained"
            color="error"
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} color="inherit" /> : 'Eliminar'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DeleteCommentButton;
