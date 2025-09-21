import PostService from "../services/post.service.js";
class PostController{
    constructor(){
        this.postService= new PostService(); 
    }

    async getAllPost(req, res, next){
        try {
            const post=await this.postService.getAllPost();
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({status:"error",message:"error al obtener todos los posteos"});
        }
    }

    async getPostById(req, res,next){
        try {
            const post=await this.postServiceostService.getAllPost(id);
            const id= req.params.id;
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({status:"error",message:"error al obtener el posteo"});
        }
    }

    async createNewPost(req, res, next){
        try{
            const {title, date, content}= req.body;
            const newPost = {
                title,
                date,
                content,
            };
            const post=await this.postService.createNewPost(newPost);
            res.status(200).json({status:"success", newPost:post});
        } catch(error){
            next(error)
        }
    }

    async deletePost(req,res,next){
        try {
            const {id}=req.params;
            await this.postService.deletePost(id);
            await res.status(200).json({status:"success", message:"posteo eliminado con exito" });
        } catch (error) {
            next(error);
        }
    }

    async updatePost(req,res,next){
        try {
            const {id} = req.params;
            const newPost=req.body;
            const updatePost = await this.postService.updatePost(id,newPost);
            res.status(200).json({status:"success", post:updatePost});
        } catch (error) {
            next(error);
        }
    }


}
export default PostController;