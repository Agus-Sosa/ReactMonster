import express from 'express'
import { config } from './config/config.js';
import { sequelize } from './config/db.js';
import cors from 'cors' 
import { UserRouter } from './router/user.routes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { NewsRouter} from './router/news.routes.js';
import { LikeRouter } from './router/like.router.js';
import { CommentRouter } from './router/comment.router.js';
import { seedUsers } from './utils/seedUser.js';

const app = express();
const port = config.PORT

app.use(cors());
app.use(express.json());

app.use('/users', UserRouter);
app.use('/new', NewsRouter);
app.use('/like', LikeRouter);
app.use('/comment', CommentRouter)
app.use(errorHandler);



const startServer = async () => {
  try {
    await sequelize.sync({force:true});
    console.log("Base de datos sincronizada");

    await seedUsers(); // Funcion para crear usuarios automaticamente para no tener que crear a cada rato (ATTE: lo teni 👟)


    app.listen(port, () => {
      console.log(`Servidor funcionando en puerto ${port}`);
    });

  } catch (error) {
    console.log(`Ocurrió un error en la inicialización: ${error.message}`);
  }
};



startServer();
