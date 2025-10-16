import { User } from "../models/User.js";


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
  if(!tokenHeader) {
    const error = new Error("El token no fue enviado");
    error.status = 400;
    throw error;
  }

  const token = tokenHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, "react_monsters");

    req.user= decodedToken;

  next()

  } catch (error) {
    throw error;
  }



}


export const verifyRole=(role)=> {
    return (req,res, next)=> {
        const userRole = req.user.role;
        if (userRole !== role) {
            return res.status(404).json({status:"error", message:`Acceso denegado`})
        }
        next();
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


export const validateUpdateUser = async(req, res, next) => {

}
