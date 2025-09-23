import { Categories } from "../models/Categories.js";
export const tempCategories =async()=> {
     await Categories.bulkCreate([
    {
        id_category: 1,
        name_category: 'Comunidad',
        resume:' Habla sobre temas relacionados a la comunidad.'
    },
    {
        id_category: 2,
        name_category:'PVP',
        resume:'Habla sobre el PVP del juego.'
    },
    {
        id_category:3,
        name_category:'Historia',
        resume:'Habla sobre la historia del juego.'
    },
    {
        id_category:4,
        name_category:'Features',
        resume:' Habla sobre futuros cambios en el juego o propon los tuyos!'
    }
  ]);
}