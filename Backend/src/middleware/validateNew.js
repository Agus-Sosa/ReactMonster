import { News } from "../models/News.js";
import haveBadWord from "./badwords.js"

// middleware to validate news data before creating or updating it
// checks the title, summary, and content, and whether they contain prohibited words

export const validateNew=(req, res, next)=> {
    const {title, resume, content} = req.body;

    if (!title || title.length < 3){
        res.status(404).json({status: "error", message: "El titulo debe tener al menos 3 caracteres."})
    }
    if (!resume || resume.length < 20 || resume.length > 250){
        res.status(404).json({status: "error", message: "El resumen debe ser mayor a 20 caracteres y no mayor a 250."})
    }
    if (!content || content.length < 20 ){
        res.status(404).json({status: "error", message: "El contenido de la noticia debe ser mayor a 20 caracteres y."})
    }
    if (haveBadWord(title)){
        res.status(404).json({status: "error", message: "El titulo contiene palabras no permitidas."})
    }
    if (haveBadWord(resume)){
        res.status(404).json({status: "error", message: "El resumen contiene palabras no permitidas."})
    }
    if (haveBadWord(content)){
        res.status(404).json({status: "error", message: "El contiene contiene palabras no permitidas."})
    }


    next();

}
// middleware to validate that the news exists before GET/PUT/DELETE operations
export const validateGetNewById= async(req, res, next)=> {
    const id= parseInt(req.params.id, 10); 
    const existingNew =await News.findByPk(id);
    
    if (!existingNew) {
        return res.status(404).json({status:"error", message:"La noticia no existe."});
    }


    next();

}
