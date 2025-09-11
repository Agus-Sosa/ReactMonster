export const errorHandler=(error, req, res, next)=> {
    console.error(error);

    const status = error.status || 500;
    const message = error.message || "Error en el servidor";
    res.status(status).json({status:"error", message})
}