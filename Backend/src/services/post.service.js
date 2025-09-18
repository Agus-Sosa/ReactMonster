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

    // async getPostById
}
export default PostService;