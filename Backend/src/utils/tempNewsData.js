import { News } from "../models/News.js";
export const tempNewsData = async () => {
await News.bulkCreate([
  {
    id_admin: 1,
    title: "¡Presentacion de nuevo engendro!",
    resume: "Permíteme presentarte a Kael: un viajero marcado por una antigua maldición...",
    content: `
      Kael fue encontrado en las ruinas de un templo olvidado, con inscripciones que hablaban de un guerrero elegido por las sombras.
      A pesar de su apariencia oscura, su propósito no es destruir, sino equilibrar la línea entre luz y oscuridad.
      Su poder crece en las noches sin luna, donde la maldición se hace más fuerte y su aura intimida a los más valientes.
      En combate, Kael es veloz, con ataques que parecen surgir de la nada, como si las sombras mismas lucharan a su lado.
    `,
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01k5wa39s5fdsb84x1es7ksb7x%2F1758665638_img_0.webp?se=2025-10-21T20%3A54%3A33Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-15T20%3A13%3A04Z&ske=2025-10-22T20%3A18%3A04Z&sks=b&skv=2024-08-04&sig=sHGEiyAtelobhxk2hva%2BDMy8H914IniWVoTlKy0MpLo%3D&az=oaivgprodscus"
  },
  {
    id_admin: 2,
    title: "Finde Semana X2",
    resume: "¡Prepárate para el fin de semana doble!...",
    content: `
      Desde el viernes a las 18:00 hasta el domingo a medianoche, todas las partidas otorgarán el doble de experiencia.
      Los cofres especiales estarán activos durante el evento, con un 30% más de probabilidad de recompensas épicas.
      Los jugadores que participen en más de 10 combates recibirán un ítem exclusivo conmemorativo.
      Este evento busca incentivar el trabajo en equipo y la estrategia.
    `,
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01k5wa39s5fdsb84x1es7ksb7x%2F1758665638_img_0.webp?se=2025-10-21T20%3A54%3A33Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-15T20%3A13%3A04Z&ske=2025-10-22T20%3A18%3A04Z&sks=b&skv=2024-08-04&sig=sHGEiyAtelobhxk2hva%2BDMy8H914IniWVoTlKy0MpLo%3D&az=oaivgprodscus"
  },
  {
    id_admin: 1,
    title: "Crepúsculo: La nueva arena!",
    resume: "Te presento la Arena Crepúsculo...",
    content: `
      La arena está ubicada en lo más profundo de las montañas, accesible solo a los más osados.
      El suelo está cubierto de grietas por donde emana una neblina mística.
      Las estatuas que rodean la arena representan a guerreros olvidados.
      Cada atardecer, el sol se oculta tras la arena, bañando de rojo las piedras y dando inicio al combate más feroz.
    `,
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01k5wa39s5fdsb84x1es7ksb7x%2F1758665638_img_0.webp?se=2025-10-21T20%3A54%3A33Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-15T20%3A13%3A04Z&ske=2025-10-22T20%3A18%3A04Z&sks=b&skv=2024-08-04&sig=sHGEiyAtelobhxk2hva%2BDMy8H914IniWVoTlKy0MpLo%3D&az=oaivgprodscus"
  }
]);

}
