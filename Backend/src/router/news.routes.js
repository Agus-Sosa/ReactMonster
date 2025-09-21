import { Router } from "express";
import NewService from "../controller/news.controller.js";
import { validateNew, validateGetNewById } from "../middleware/validateNew.js";


const router = Router();
const newController = new  NewService()

router.get('/', async(req, res)=> {
    await newController.getAllNews(req, res);
})
router.get('/someNews',async(req,res,next)=>{
    await newController.getSomeNews(req,res,next);
})

// para crear nuevas noticias
router.post('/createNew',validateNew, async(req, res, next)=>{ 
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
router.put('/:id', async(req, res, next)=> {
    await newController.updateNew(req, res, next)
} )

export {router as NewsRouter};