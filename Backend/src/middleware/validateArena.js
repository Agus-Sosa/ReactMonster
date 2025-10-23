import { Arena } from "../models/Arena.js";


export const validateIdArena= async(req, res, next)=> {
    const id= parseInt(req.params.id, 10); 
    const existingUser =await Arena.findByPk(id);
    
    if (!existingUser) {
        return res.status(404).json({status:"error", message:"la arena no existe"});
    }


    next();

}


export const validateNameArena=async(req, res, next) => {
    const {monster_name} = req.body;
    const existingArena=await Arena.findOne({where: {monster_name: monster_name}}); 
    if (!existingArena) {
        return res.status(404).json({status:"error", message:"la arena no existe"});
    }


    next();
}