import express from 'express'
import { config } from './config/config.js'
import { sequelize } from './config/db.js'
import cors from 'cors'
import { UserRouter } from './router/user.routes.js'
import LikeRouter from './router/like.routes.js'
import CommentRouter from './router/comment.routes.js'
import { errorHandler } from './middleware/errorHandler.js'
import "./models/Relations.js" // ojo

const app = express()
const port = config.PORT

app.use(cors())
app.use(express.json())
app.use('/users', UserRouter)
app.use('/likes', LikeRouter)
app.use('/comments', CommentRouter)
app.use(errorHandler)

const startServer = async () => {
  try {
    await sequelize.sync({ force: true })  //esto borra y recrea las tablas cuidado para producción usar { alter:true } o sin opciones
    console.log("Base de datos sincronizada")

    app.listen(port, () => {
      console.log(`Servidor funcionando en puerto ${port}`)
    })
  } catch (error) {
    console.log(`Ocurrió un error en la inicialización: ${error.message}`)
  }
}

startServer()
