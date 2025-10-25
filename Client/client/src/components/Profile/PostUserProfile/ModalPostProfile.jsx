import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ModalPostProfile = ({ post, open, onClose }) => {
    console.log("post:", post)
  if (!post) {
    return null;
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString('es-AR', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="post-modal-title"
      aria-describedby="post-modal-content"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '90%', sm: '80%', md: '60%' },
        maxWidth: '800px',
        maxHeight: '90vh',
        overflowY: 'auto',
        bgcolor: '#1e1e1e',
        color: 'white',
        border: '1px solid #3f3f3f',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        outline: 'none',
      }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: 'grey.500' }}
        >
          <CloseIcon />
              </IconButton>
        
        <Typography id="post-modal-title" variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>{post.title}</Typography>
        <Typography variant="caption" display="block" sx={{ color: '#888', mb: 3 }}>Publicado el: {formattedDate}</Typography>
              <Box component={"img"} sx={{width: '100%', height: 'auto', mb: 2, borderRadius: 2}} src={ post.imgContent} /> 
        <Typography id="post-modal-content" sx={{ whiteSpace: 'pre-wrap' }}>{post.content}</Typography>
      </Box>
    </Modal>
  );
}

export default ModalPostProfile;