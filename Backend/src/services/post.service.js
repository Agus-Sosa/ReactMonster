import { User, Post } from "../models/index.js";

class PostService {
    constructor(){
        this.modelPost=Post
    }

    //mostrar todos los post
    //si laburo con async si o si utilizo await devuelva una respuesta
    async getAllPost (){
        return await this.modelPost.findAll(
            {
              include: [
                   {
                     model: User,
                     attributes: ["user_name","range","profile_picture"],
                 }]  
            }
        );
    }

     async getPostById (id) {
         return await this.modelPost.findByPk({
             id ,
             include: [
                   {
                     model: User,
                     attributes: ["user_name","range","profile_picture"],
                 }]
         });
     }

    async getPostByCategory (id) {
        return await this.modelPost.findAll({
            where:{
                id_category: id
            },
            include: [
      {
        model: User,
        attributes: ["user_name","range","profile_picture"],
         }]
            
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