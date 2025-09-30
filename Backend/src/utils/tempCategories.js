import { Categories } from "../models/Categories.js";
export const tempCategories =async()=> {
     await Categories.bulkCreate([
    {
        id_category: 1,
        name_category: 'Comunidad',
        resume:' Habla sobre temas relacionados a la comunidad.',
        imageUrl:"https://png.pngtree.com/png-vector/20250226/ourmid/pngtree-mysterious-and-minimalistic-norse-mythology-art-in-black-white-png-image_15592012.png"
        
    },
    {
        id_category: 2,
        name_category:'PVP',
        resume:'Habla sobre el PVP del juego.',
        imageUrl:"https://cdn-icons-png.flaticon.com/512/1037/1037908.png"
    },
    {
        id_category:3,
        name_category:'Historia',
        resume:'Habla sobre la historia del juego.',
        imageUrl:"https://images.vexels.com/media/users/3/243343/isolated/preview/a782605a66328a14be33ef0be6d7eb37-medieval-realistcountourline-15.png"
    },
    {
        id_category:4,
        name_category:'Features',
        resume:' Habla sobre futuros cambios en el juego o propon los tuyos!',
        imageUrl:"https://cdn-icons-png.flaticon.com/512/839/839705.png"
    }
  ]);
}