import PostService from "../services/post.service.js";
class PostController{
    constructor(){
        this.postService= new PostService() 
    }

    async getAllPost(req, res, next){
        try {
            const post=await this.postService.getAllPost();
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json({status:"error",message:"error al obtener todos los posteos"})
        }
    }

}
export default PostController;