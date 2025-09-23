import { Post } from "../models/Post.js";
import haveBadWord from "./badwords.js"

//validacion de titulo y contenido
export const validateNewPost=(req,res,next)=>{
    const {title, content }=req.body
    if (!title || title.length<3 || title.length>30){
        res.status(404).json({status:"error", message:"el titulo debe contener mas de 3 caracteres y menos de 30."})
    }
    if (!content || content.length<3 || content.length>200){
        res.status(404).jsno({status:"error", message:"el contenido de el post debe tener mas de 3 caracteres y menos de 200."})
    }
    if (haveBadWord(title)){
        res.status(404).json({status:"error", message:"El titulo contiene palabras no permitidas."})
    }
    if (haveBadWord(content)){
        res.status(404).json({status:"error", message:"El contiene contiene palabras no permitidas."})
    }

    next();
}
// cuando uso async es por que espero un resultado de operaciones asincronas(una promesa)
//validacion que excista el id del post
export const validateGetPostById = async (req,res,next)=>{
    const id=parseInt(req.params.id,10);
    const existinPost=await Post.findByPk(id);

    if(!existinPost){
        return res.status(404).json({status:"error", message:"el post no existe(no se encontro su id)"});
    }

    next();
}