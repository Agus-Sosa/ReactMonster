import express from 'express'
import { config } from './config/config.js';
import { sequelize } from './config/db.js';
import cors from 'cors' 
import { UserRouter } from './router/user.routes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { NewsRouter} from './router/news.routes.js';
import { PostRouter } from './router/post.routes.js';
import { AuthRouter } from './router/auth.routes.js';
import { tempDataIndex } from './utils/temIndex.js';
import { MonsterRouter } from './router/monster.routes.js';
import { ArenaRouter } from './router/arena.routes.js';
import { LikeRouter } from './router/like.routes.js';
import { CommentRouter } from './router/comment.routes.js';
import { categoriasRouter } from './router/category.routes.js';

const app = express();
const port = config.PORT

app.use(cors());
app.use(express.json());
app.use('/categories', categoriasRouter);
app.use('/users', UserRouter);
app.use('/post', PostRouter );
app.use('/auth', AuthRouter)
app.use('/news', NewsRouter);
app.use('/likes', LikeRouter);
app.use('/comments', CommentRouter);
app.use('/monsters',MonsterRouter);
app.use('/arenas', ArenaRouter);
app.use(errorHandler);



const startServer = async () => {
  try {
    await sequelize.sync({force:true});
    console.log("Base de datos sincronizada");

    await tempDataIndex(); // Funcion para crear usuarios automaticamente para no tener que crear a cada rato (ATTE: lo teni 👟)


    app.listen(port, () => {
      console.log(`Servidor funcionando en puerto ${port}`);
    });

  } catch (error) {
    console.log(`Ocurrió un error en la inicialización: ${error.message}`);
  }
};



startServer();
