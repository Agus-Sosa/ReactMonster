import { Router } from "express";
import NewService from "../controller/news.controller.js";
import { validateNew, validateGetNewById } from "../middleware/validateNew.js";


const router = Router();
const newController = new  NewService()

router.get('/', async(req, res)=> {
    await newController.getAllNews(req, res);
})

// para crear nuevas publicaciones
router.post('/',validateNew, async(req, res, next)=>{ 
    await newController.createNew(req, res, next)
})
// obtener mediante id
router.get("/:id", validateGetNewById,async(req, res, next)=> {
    await newController.getNewById(req,res, next);
})  
//eliminar por id
router.delete("/:id",validateGetNewById, async(req,res, next)=> {
    await newController.deleteNewById(req,res, next)
})