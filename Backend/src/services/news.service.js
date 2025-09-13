import { News } from "../models/News.js";

class NewService{
    constructor(){
        this.modelNew = News
    }

    async getAllUser () {
        return await this.modelNew.findAll();
    }

    async getNewById (id) {
        return await this.modelNew.findByPk(id);
    }

    async deleteNewById(id) {
        return await this.modelNew.destroy({
            where: {id} 
        });
    }
    
}
