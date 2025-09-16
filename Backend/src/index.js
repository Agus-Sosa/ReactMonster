import express from 'express';
import { sequelize } from './config/db.js';
import config from './config/config.js';
import commentRouter from './router/comment.router.js';
import likeRouter from './router/like.router.js';

const app = express();
const port = config.PORT || 3000;

app.use(express.json());
app.use('/comments', commentRouter);
app.use('/likes', likeRouter);

const startServer = async () => {
  try {
    await sequelize.sync({ force: true }); // cuidado esto borra y recrea las tablas cuidado para producción usar { alter:true } o sin opciones
    console.log('Base de datos sincronizada');

    app.listen(port, () => {
      console.log(`Servidor corriendo en puerto ${port}`);
    });
  } catch (err) {
    console.error('Error al iniciar el servidor:', err.message);
  }
};

startServer();
