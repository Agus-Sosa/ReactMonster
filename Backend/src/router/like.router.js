import express from "express";
import { toggleLike, getLikes, checkUserLike } from "../controller/like.controller.js";
import { validateUser } from "../middleware/validateUser.js";

const router = express.Router();
// sistemas de likes
router.post("/:id_post", validateUser, toggleLike);      
router.get("/:id_post/count", getLikes);                 
router.get("/:id_post/check", validateUser, checkUserLike); 

export default router;
