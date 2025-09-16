import { News } from "../models/News.js";

class NewService{
    constructor(){
        this.modelNew = News
    }

    async getAllNews () {
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