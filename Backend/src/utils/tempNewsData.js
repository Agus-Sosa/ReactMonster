import { News } from "../models/News.js";
export const tempNewsData =async()=> {
     await News.bulkCreate([
    {
      id_admin: 1,
      title: "¡Presentacion de nuevo engendro!",
      resume: "Permíteme presentarte a Kael: un viajero marcado por una antigua maldición, destinado a caminar entre vivos y sombras, llevando consigo un pasado que nunca eligió.",
      content: { paragraphs: ["Párrafo 1", "Párrafo 2"] },
      imageUrl:'https://cdn.pixabay.com/photo/2023/01/30/20/13/devil-7756538_1280.jpg'
    },
    {
      id_admin: 2,
      title: "Finde Semana X2",
      resume: "¡Prepárate para el fin de semana doble! Durante estos días, la Arena ofrece x2 de experiencia y recompensas, ¡una oportunidad única para subir de nivel y conseguir botín extra!",
      content: { paragraphs: ["Contenido inicial", "Contenido adicional"] },
      imageUrl:'https://www.lagrietaonline.com/wp-content/uploads/2015/03/LaGrieta_Jorney_Videojuegos.jpg'
    },
    {
      id_admin: 1,
      title: "Crepúsculo: La nueva arena!",
      resume: "Te presento la Arena Crepúsculo: un coliseo de piedra oscura donde el viento silba entre grietas antiguas y las sombras se vuelven parte del combate.",
      content: { paragraphs: ["Texto de ejemplo"]},
      imageUrl:'https://img.freepik.com/fotos-premium/ambiente-de-fundo-2d-de-arena-de-luta-para-um-jogo-movel-uma-paisagem-de-fundo-horizontal-de-alta-qualidade-localizacao-do-design-do-modelo-de-jogo-generativo_159242-19346.jpg',
      
    }
  ]);
}