export const errorHandler=(error, req, res, next)=> {
   



    const status = error.status || 500;
    const message = error.message || "Error en el servidor";
    res.status(status).json({status:"error", message:message});
}