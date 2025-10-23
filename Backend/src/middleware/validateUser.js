import { User } from "../models/User.js";
import jwt from 'jsonwebtoken'

//El middleware es un filtro que revisa los datos antes de que el controller haga algo.
// Si algo está mal, lo bloquea; si todo está bien, deja que siga.
// Despues se coloco en los archivo routes , en este caso en user.routes
// Para despues verificacion mas rebuscadas se hacen en los services

export const validateNewUser=(req, res, next)=> {
    const {user_name, user_email, user_password} = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!user_name|| user_name.length <3) {
        res.status(404).json({status: "error", message: "El nombre debe tener al menos 3 caracteres"})
    }

    if(!user_email || !emailRegex.test(user_email)) {
        res.status(404).json({status: "error", message: "Formato incorrecto de email ejemplo (agua@gmail.com)"})
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if(!user_password || !passwordRegex.test(user_password)) {
        res.status(404).json({status: "error", message: "La contraseña debe tener al menos 6 caracteres, una letra mayúscula y un número"})

    }

    next();

}




export const verifyToken =(req, res , next)=> {
  const tokenHeader = req.headers.authorization;
  console.log("token:", tokenHeader);
  if(!tokenHeader) {
    const error = new Error("El token no fue enviado");
    error.status = 400;
    throw error;
  }

  const token = tokenHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, "react_monsters");
    console.log("decoded:", decodedToken)
    req.user = decodedToken;
    console.log("req_usera:",req.user)

  next()

  } catch (error) {
    const err = new Error("La sesion expiro o no es valida")
    err.status = 401;
    throw err
  }



}



export const verifyLogin=(req,res, next)=> {
    const {user_email, user_password} = req.body;
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!user_email || !emailRegex.test(user_email)) {
        res.status(404).json({status: "error", message: "Formato incorrecto de email ejemplo (agua@gmail.com)"})
    }


    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if(!user_password || !passwordRegex.test(user_password)) {
        res.status(404).json({status: "error", message: "La contraseña debe tener al menos 6 caracteres, una letra mayúscula y un número"})

    }


    next();

}


export const validateGetUserById= async(req, res, next)=> {
    const id= parseInt(req.params.id, 10); 
    const existingUser =await User.findByPk(id);
    
    
    if (!existingUser) {
        return res.status(404).json({status:"error", message:"El usuario no existe"});
    }


    next();

}



export const isAdmin=(req, res, next)=> {
  if (!req.user.role ||(req.user.role !== 'admin' && req.user.role !== 'superadmin')) {
    const error = new Error("No cuenta con los permisos necesarios");
    error.status = 404;
    throw error;

  }
  next();
}

