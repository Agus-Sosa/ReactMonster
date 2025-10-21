import {Router} from 'express'
import MonsterController from '../controller/monster.controller.js';
import { isAdmin, verifyToken } from '../middleware/validateUser.js';

const router = Router();
const monsterController = new MonsterController();


router.get('/', async(req, res, next)=> {
    return await monsterController.getAllMonsters(req, res, next);

})

router.post('/',verifyToken, isAdmin, async (req, res, next) => { 
    return await monsterController.createNewMonster(req, res, next);
})

router.get('/:id', async(req, res, next)=> {
    return await monsterController.getMonsterById(req, res ,next);
})


router.post('/name', async(req, res, next)=> {
    return await monsterController.getMonsterByName(req, res ,next);
})


router.delete('/:id', async (req, res, next) => { 
    return await monsterController.deleteMonsterById(req, res, next);
});
export {router as MonsterRouter};