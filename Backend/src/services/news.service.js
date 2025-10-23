import { News } from "../models/News.js";
import { User } from "../models/User.js";

class NewService{
    constructor(){
        this.modelNew = News
        this.modelUser = User
    }
    // returns an array with all the records
    async getAllNews () {
        return await this.modelNew.findAll({where:{state:true} });
    }
    //get a limited number of news items, sorted by creation date descending
    async getSomeNews(limit){
        return await this.modelNew.findAll({
            limit: limit,
            where:{state:true},
            order: [['createdAt', 'DESC']]
        })
    }
    // get a news item by your ID
    async getNewById (id) {
        return await this.modelNew.findByPk(
            id,
            {
            include: {
                    model: this.modelUser,
                attributes:["id_user", "user_name", "profile_picture"]
                
                }
            }
        );

    }
    // delete a news item by its ID
    async deleteNewById(id) {
        console.log("Deleting news item with ID:", id);
        return await this.modelNew.update({ state: false }, {where:{id_news:id}});
    }
    // I got tired, the name tells you what it does
    async createNew (newNew) {    
      const news = await this.modelNew.create(newNew);
        return news;
    }

    async updateNew (id,newUpdate) {
        
        const [updateData]= await this.modelNew.update(newUpdate, {where:{id_news:id}});
    
    
        if(updateData ===0) {
            throw new Error("No hay cambios");
        }

        return await this.modelNew.findByPk(id);

    }

}
export default NewService;