import NewService from "../services/news.service.js";

class NewController {
    constructor(){
        this.newService = new NewController();
    }
     async getAllNews (req, res) {
        try {
            const news = await this.newService.getAllNews();
            res.status(200).json(news)
        } catch (error) {
            res.status(500).json({status: "error", message:"Error al obtener todas las noticias"})
        }
    }
    async getSomeNews(req,res){
        try{
            const limit = parseInt(req.query.limit)
            const news = await this.newService.getSomeNews(limit);
            res.status(200).json(news);
        }
        catch (error) {
            res.status(500).json({status: "error", message:"Error al obtener las noticias"})
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
    async createNew (req, res, next) {
        try {
            const {title, resume, content}= req.body;
            const newNew = {
                title,
                resume,
                content,
            };
            const notice =await this.newService.createNew(newNew);
            res.status(200).json({status:"success", newNew:notice});
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

       async updateNew(req,res,next) {
        try {
            const {id}=req.params;
            const newData = req.body;

            const updateNew = await this.newService.updateNew(id, newData);

            res.status(200).json({status: "success", data:updateNew})

        } catch (error) {
            next(error);
        }
    } 


    
}
export default NewController;