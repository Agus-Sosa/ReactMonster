

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