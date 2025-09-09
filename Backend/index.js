import express from 'express'
import { config } from './config.js';
const app = express();
const port = config.PORT




app.listen(port, ()=> console.log("Escuchando en el puerto"), port);