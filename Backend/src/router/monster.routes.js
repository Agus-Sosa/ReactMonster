import {Router} from 'express'
import MonsterController from '../controller/monster.controller.js';

const router = Router();
const monsterController = new MonsterController();


router.get('/', async(req, res, next)=> {
    return await monsterController.getAllMonsters(req, res, next);

})

router.get('/:id', async(req, res, next)=> {
    return await monsterController.getMonsterById(req, res ,next);
})


router.post('/name', async(req, res, next)=> {
    return await monsterController.getMonsterByName(req, res ,next);
})

export {router as MonsterRouter};