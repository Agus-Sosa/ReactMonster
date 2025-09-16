export const errorHandler=(error, req, res, next)=> {
    console.error(error);


    if(error.message === "El email ya fue registrado anteriomente") return res.status(404).json({satatus:"error", message:error.message});
    if(error.message === "El nombre ya esta en uso") return res.status(401).json({status:"error", message:error.message})

    const status = error.status || 500;
    const message = error.message || "Error en el servidor";
    res.status(status).json({status:"error", message})
}