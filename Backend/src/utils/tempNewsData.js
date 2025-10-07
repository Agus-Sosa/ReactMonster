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
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01k6r65njaebmr76dmrtxp2wxw%2F1759601007_img_0.webp?st=2025-10-05T18%3A36%3A02Z&se=2025-10-11T19%3A36%3A02Z&sks=b&skt=2025-10-05T18%3A36%3A02Z&ske=2025-10-11T19%3A36%3A02Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=qAiyCx58UlSEkBkglGZqAcgc1JdDEYAd1IUH0SWBXHE%3D&az=oaivgprodscus"
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
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01k6r65njaebmr76dmrtxp2wxw%2F1759601007_img_0.webp?st=2025-10-05T18%3A36%3A02Z&se=2025-10-11T19%3A36%3A02Z&sks=b&skt=2025-10-05T18%3A36%3A02Z&ske=2025-10-11T19%3A36%3A02Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=qAiyCx58UlSEkBkglGZqAcgc1JdDEYAd1IUH0SWBXHE%3D&az=oaivgprodscus"
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
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01k6r65njaebmr76dmrtxp2wxw%2F1759601007_img_0.webp?st=2025-10-05T18%3A36%3A02Z&se=2025-10-11T19%3A36%3A02Z&sks=b&skt=2025-10-05T18%3A36%3A02Z&ske=2025-10-11T19%3A36%3A02Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=qAiyCx58UlSEkBkglGZqAcgc1JdDEYAd1IUH0SWBXHE%3D&az=oaivgprodscus"
  }
]);

}
