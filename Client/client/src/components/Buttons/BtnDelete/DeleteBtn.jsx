import React, { useState ,useContext} from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from '../../../context/AuthContext.jsx'

const DeleteCommentButton = ({ postId, commentId, userId, onDeleted }) => {
    const { user } = useContext(AuthContext); 
    const [loading, setLoading] = useState(false);

    if (user.id != userId) return null;

    const handleDelete = async () => {
      
    const confirmDelete = window.confirm('¿Seguro que querés eliminar este comentario?');
    if (!confirmDelete) return;

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:8080/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_user: userId }),
    });

    if (!res.ok) {
        throw new Error('Error al eliminar el comentario');
    }

    const data = await res.json();

    if (onDeleted) {
        onDeleted(data);
    }

    alert('Comentario eliminado correctamente');
    } catch (error) {
        console.error(error);
        alert('No se pudo eliminar el comentario');
    } finally {
    setLoading(false);
    }
  };

return (
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
  );
};

export default DeleteCommentButton;
