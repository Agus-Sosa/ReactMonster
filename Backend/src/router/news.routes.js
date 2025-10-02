import { Router } from "express";
import NewService from "../controller/news.controller.js";
import { validateNew, validateGetNewById } from "../middleware/validateNew.js";

// NEWS ROUTES
const router = Router();
const newController = new  NewService()

// get all the news
router.get('/', async(req, res)=> {
    await newController.getAllNews(req, res);
})
// get a limited number of news, the limit is passed by query param
router.get('/someNews',async(req,res,next)=>{
    await newController.getSomeNews(req,res,next);
})

// create a new news item
// middleware `validateNew` validates that the data is correct before creating
router.post('/createNew',validateNew, async(req, res, next)=>{ 
    await newController.createNew(req, res, next)
})
// get a specific news item by ID
// middleware `validateGetNewById` verifies that the news item exists
router.get("/:id", validateGetNewById,async(req, res, next)=> {
    await newController.getNewById(req,res, next);
})  
// delete a news item by ID
// middleware `validateGetNewById` ensures that the news item exists before deleting
router.delete("/:id",validateGetNewById, async(req,res, next)=> {
    await newController.deleteNewById(req,res, next)
})
// update a news item by ID
router.put('/:id', async(req, res, next)=> {
    await newController.updateNew(req, res, next)
} )

export {router as NewsRouter};