import { User } from "../models/User.js";


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


export const verifyRole=(role)=> {
    return (req,res, next)=> {
        const userRole = req.user.role;
        if (userRole !== role) {
            return res.status(404).json({status:"error", message:`Acceso denegado`})
        }
        next();
    }
}


export const validateGetUserById= async(req, res, next)=> {
    const id= parseInt(req.params.id, 10); 
    const existingUser =await User.findByPk(id);
    
    if (!existingUser) {
        return res.status(404).json({status:"error", message:"El usuario no existe"});
    }


    next();

}