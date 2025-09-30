import { Post } from "../models/Post.js";

class PostService {
    constructor(){
        this.modelPost=Post
    }

    //mostrar todos los post
    //si laburo con async si o si utilizo await devuelva una respuesta
    async getAllPost (){
        return await this.modelPost.findAll();
    }

     async getPostById (id) {
        return await this.modelPost.findByPk(id);
     }

    async getPostByCategory (id) {
        return await this.modelPost.findAll({
            where:{
                id_category: id
            }
        });
     }

     async createNewPost (newPost) {
        return await this.modelPost.create(newPost)
     }

     async deletePost (idPost){
        return await this.modelPost.destroy(idPost)
     }

     async updatePost (idPost, newPost){ 
        const [updateData]= await this.modelPost.update(newPost, {where:{idPost}});
    
    
        if(updateData ===0) {
            throw new Error("No hay cambios");
        }

        return await this.modelPost.findByPk(idPost);
    }

     
}
export default PostService;