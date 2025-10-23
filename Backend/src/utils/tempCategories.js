import { Categories } from "../models/Categories.js";
export const tempCategories =async()=> {
     await Categories.bulkCreate([
    {
        id_category: 1,
        title: 'Comunidad',
        resume:'Comparte ideas, haz amigos y habla sobre todo lo relacionado con la comunidad del juego.',
        imageUrl:"https://cdn.pixabay.com/photo/2025/08/08/15/48/pixel-art-9762954_640.png"
        
    },
    {
        id_category: 2,
        title:'PVP',
        resume:'Comenta tus estrategias, comparte tus mejores combates y discute sobre el modo jugador contra jugador.',
        imageUrl:"https://static.vecteezy.com/system/resources/thumbnails/027/226/437/small/an-8-bit-retro-styled-pixel-art-illustration-of-a-red-stone-sword-free-png.png"
    },
    {
        id_category:3,
        title:'Historia',
        resume:'Explora la narrativa del juego, teorías, personajes y eventos que dan vida al universo del juego.',
        imageUrl:"https://cdn-icons-png.flaticon.com/512/3172/3172747.png"
    },
    {
        id_category:4,
        title:'Features',
        resume:'Propón nuevas ideas, comenta futuros cambios o debate sobre las próximas actualizaciones del juego.',
        imageUrl:"https://cdn-icons-png.flaticon.com/512/272/272892.png"
    }
  ]);
}