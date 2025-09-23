import haveBadword from './badwords.js';

export const validateComment = (req, res, next) => {
  const { comment } = req.body;

  if (!comment || comment.trim().length < 5) {
    return res.status(400).json({
      status: 'error',
      message: 'El comentario debe tener al menos 5 caracteres.'
    });
  }

  if (comment.length > 500) {
    return res.status(400).json({
      status: 'error',
      message: 'El comentario no puede superar los 500 caracteres.'
    });
  }

  if (haveBadword(comment)) {
    return res.status(400).json({
      status: 'error',
      message: 'El comentario contiene palabras no permitidas.'
    });
  }

  next();
};
