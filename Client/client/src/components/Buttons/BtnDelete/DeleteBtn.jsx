import React, { useState, useContext } from 'react';
import { IconButton, Tooltip, CircularProgress, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from '../../../context/AuthContext.jsx';
import { toast } from 'react-toastify';

const DeleteCommentButton = ({ postId, commentId, userId, onDeleted }) => {
  const { user,token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  if (!user || user.id !== userId && user.role != 'admin') return null;

  const handleDelete = async () => {
    const confirmDelete = window.confirm('¿Seguro que queres eliminar este comentario?');
    if (!confirmDelete) return;

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:8080/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        }
      });

      if (!res.ok) throw new Error('Error al eliminar el comentario.');

      const data = await res.json();
      onDeleted?.(data);

      toast.success('Comentario eliminado correctamente.');
    } catch (error) {
      console.error(error);
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
            onClick={handleDelete}
            aria-label="eliminar comentario"
            size="small"
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : <DeleteIcon />}
          </IconButton>
        </span>
      </Tooltip>
    </Box>
  );
};

export default DeleteCommentButton;
