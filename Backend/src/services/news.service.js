import { News } from "../models/News.js";

class NewService{
    constructor(){
        this.modelNew = News
    }
    // returns an array with all the records
    async getAllNews () {
        return await this.modelNew.findAll();
    }
    //get a limited number of news items, sorted by creation date descending
    async getSomeNews(limit){
        return await this.modelNew.findAll({
            limit:limit,
            order: [['createdAt', 'DESC']]
        })
    }
    // get a news item by your ID
    async getNewById (id) {
        return await this.modelNew.findByPk(id);
    }
    // delete a news item by its ID
    async deleteNewById(id) {
        return await this.modelNew.destroy({
            where: {id} 
        });
    }
    // I got tired, the name tells you what it does
    async createNew (newNew) {    
        return await this.modelNew.create(newNew);
    }

    async updateNew (id,newUpdate) {
        
        const [updateData]= await this.modelNew.update(newUpdate, {where:{id}});
    
    
        if(updateData ===0) {
            throw new Error("No hay cambios");
        }

        return await this.modelNew.findByPk(id);

    }

}
export default NewService;