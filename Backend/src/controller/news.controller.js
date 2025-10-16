import NewService from "../services/news.service.js";
// Each method calls the service layer to perform operations on the database
class NewController {
    constructor(){
        this.newService = new NewService();
    }
    // get all the news
    // GET /news
    async getAllNews (req, res) {
        try {
            const news = await this.newService.getAllNews();
            res.status(200).json(news)// returns the complete array of news
        } catch (error) {
            res.status(500).json({status: "error", message:"Error al obtener todas las noticias"})
        }
    }
    // get a limited number of news items
    // GET /news?limit=10
    // the limit is passed as a query parameter in the URL
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
    // get a news item by its ID
    // GET /news/:id
    async getNewById(req, res, next){
        try {
            const id= req.params.id;
            const news = await this.newService.getNewById(id);
            res.status(200).json({status: "success", new:news});
        } catch (error) {
            next(error) // pass the error to the error handling middleware

        }
    }
    // create a new news item
    // POST /news
    async createNew (req, res, next) {
        try {
            const { title, resume, content } = req.body; // data sent by the client
            
            const id_admin = req.user.role;
            const newNew = {
                id_admin,
                title,
                resume,
                content
                
            };
            console.log(newNew, "new controller")
            const notice =await this.newService.createNew(newNew);
            res.status(200).json({status:"success", newNew:notice});

        } catch (error) {
            next(error)
        }

    }
    // delete a news item by its ID
    // DELETE /news/:id
        async deleteNewById (req, res) {
        try {
        
            const {id}= req.params;
            await this.newService.deleteNewById(id);
            await res.status(200).json({status:"success", messgae:"Noticia eliminada con exito"})
        } catch (error) {
            next(error)
        }
    }
    // update an existing news item
    // PUT /news/:id
       async updateNew(req,res,next) {
        try {
            const {id}=req.params;
            const newData = req.body; // data to update

            const updateNew = await this.newService.updateNew(id, newData);

            res.status(200).json({status: "success", data:updateNew})

        } catch (error) {
            next(error);
        }
    } 

}
export default NewController;