import { Router } from "express";
import NewService from "../controller/news.controller.js";
import { validateNew } from "../middleware/validateNew.js";


const router = Router();
const newController = new  NewService()

router.get('/', async(req, res)=> {
    await newController.getAllNews(req, res);
})
