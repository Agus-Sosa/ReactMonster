import express from 'express'
import { config } from './config/config.js';
import { sequelize } from './config/db.js';
import cors from 'cors' 
import { UserRouter } from './router/user.routes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { NewsRouter} from './router/news.routes.js';
import { PostRouter } from './router/post.routes.js';
const app = express();
const port = config.PORT

app.use(cors());
app.use(express.json());

app.use('/users', UserRouter);
app.use('/new', NewsRouter);
app.use('/post', PostRouter );

app.use(errorHandler);



const startServer = async () => {
  try {
    await sequelize.sync({force:true});
    console.log("Base de datos sincronizada");

    app.listen(port, () => {
      console.log(`Servidor funcionando en puerto ${port}`);
    });

  } catch (error) {
    console.log(`Ocurrió un error en la inicialización: ${error.message}`);
  }
};



startServer();

