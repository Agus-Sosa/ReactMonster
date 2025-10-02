import { Categories } from "../models/Categories.js";

//validates if the category id exists
export const validateIdCategory= async(req, res, next)=> {
    const id= parseInt(req.params.id, 10); 
    const existingCategory =await Categories.findByPk(id);
    
    if (!existingCategory) {
        return res.status(404).json({status:"error", message:"la categoria no existe"});
    }


    next();

}

