import NewService from "../services/news.service.js";

class NewController {
    constructor(){
        this.newService = new NewService();
    }
     async getAllNews (req, res) {
        try {
            const news = await this.newService.getAllNews();
            res.status(200).json(news)
        } catch (error) {
            res.status(500).json({status: "error", message:"Error al obtener todas las noticias"})
        }
    }

    async getNewById(req, res, next){
        try {
            const id= req.params.id;
            const news = await this.newService.getNewById(id);
            res.status(200).json({status: "success", new:news});
        } catch (error) {
            next(error)

        }

    }
        async deleteNewById (req, res) {
        try {
        
            const {id}= req.params;
            await this.newService.deleteNewById(id);
            await res.status(200).json({status:"success", messgae:"Noticia eliminada con exito"})
        } catch (error) {
            next(error)
        }
    }

    
}
export default NewController;