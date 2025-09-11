import express from 'express'
import { config } from './config/config.js';
import { sequelize } from './config/db.js';
import cors from 'cors' 

const app = express();
const port = config.PORT

app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    

    await sequelize.sync();
    console.log("Base de datos sincronizada");

    app.listen(port, () => {
      console.log(`Servidor funcionando en puerto ${port}`);
    });

  } catch (error) {
    console.log(`Ocurrió un error en la inicialización: ${error.message}`);
  }
};

startServer();

