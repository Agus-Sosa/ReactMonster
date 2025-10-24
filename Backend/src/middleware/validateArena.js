import { Arena } from "../models/Arena.js";
import haveBadword from './badwords.js';


export const validateIdArena= async(req, res, next)=> {
    const id= parseInt(req.params.id, 10); 
    const existingUser =await Arena.findByPk(id);
    
    if (!existingUser) {
        return res.status(404).json({status:"error", message:"la arena no existe"});
    }


    next();

}


export const validateNameArena=async(req, res, next) => {
    const {arena_name} = req.body;
    const existingArena=await Arena.findOne({where: {arena_name: arena_name}}); 
    if (!existingArena) {
        return res.status(404).json({status:"error", message:"la arena no existe"});
    }


    next();
}

export const validateInputArena = async (req, res, next) => {
    const { arena_name, arena_description } = req.body;
    if (!arena_name || arena_name.length < 4 || arena_name.length > 40) {
        return res.status(400).json({ status: "error", message: "El nombre de la arena debe ser mayor a 3 y menor o igual a 40 caracteres." });
    }
    if (!arena_description || arena_description.length < 10 || arena_description.length > 350) {
        return res.status(400).json({ status: "error", message: "La descripcion de la arena debe ser mayor a 10 y menor o igual a 350 caracteres." });
    }
    if (haveBadword(arena_name)) {
        return res.status(400).json({ status: "error", message: "el nombre contiene palabras no permitidas" });
    }
    if (haveBadword(arena_description)) {
        return res.status(400).json({ status: "error", message: "La descripcion contiene palabras no permitidas" });
    }

    next();
}