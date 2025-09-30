import { News } from "../models/News.js";
export const tempNewsData = async () => {
  await News.bulkCreate([
    {
      id_admin: 1,
      title: "¡Presentacion de nuevo engendro!",
      resume: "Permíteme presentarte a Kael: un viajero marcado por una antigua maldición, destinado a caminar entre vivos y sombras, llevando consigo un pasado que nunca eligió.",
      content: { 
        paragraphs: [
          "Kael fue encontrado en las ruinas de un templo olvidado, con inscripciones que hablaban de un guerrero elegido por las sombras.",
          "A pesar de su apariencia oscura, su propósito no es destruir, sino equilibrar la línea entre luz y oscuridad.",
          "Su poder crece en las noches sin luna, donde la maldición se hace más fuerte y su aura intimida a los más valientes.",
          "En combate, Kael es veloz, con ataques que parecen surgir de la nada, como si las sombras mismas lucharan a su lado."
        ] 
      },
      imageUrl: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k5wa39s5fdsb84x1es7ksb7x%2F1758665638_img_0.webp?st=2025-09-29T23%3A48%3A19Z&se=2025-10-06T00%3A48%3A19Z&sks=b&skt=2025-09-29T23%3A48%3A19Z&ske=2025-10-06T00%3A48%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=CKdWt%2F9hfVYzH9VuN3wssCUgsIrx5m4VIHXaagNvk2k%3D&az=oaivgprodscus'
    },
    {
      id_admin: 2,
      title: "Finde Semana X2",
      resume: "¡Prepárate para el fin de semana doble! Durante estos días, la Arena ofrece x2 de experiencia y recompensas, ¡una oportunidad única para subir de nivel y conseguir botín extra!",
      content: { 
        paragraphs: [
          "Desde el viernes a las 18:00 hasta el domingo a medianoche, todas las partidas otorgarán el doble de experiencia.",
          "Los cofres especiales estarán activos durante el evento, con un 30% más de probabilidad de recompensas épicas.",
          "Los jugadores que participen en más de 10 combates recibirán un ítem exclusivo conmemorativo.",
          "Este evento busca incentivar el trabajo en equipo y la estrategia, recompensando tanto a jugadores veteranos como a novatos."
        ] 
      },
      imageUrl: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k5wa39s5fdsb84x1es7ksb7x%2F1758665638_img_0.webp?st=2025-09-29T23%3A48%3A19Z&se=2025-10-06T00%3A48%3A19Z&sks=b&skt=2025-09-29T23%3A48%3A19Z&ske=2025-10-06T00%3A48%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=CKdWt%2F9hfVYzH9VuN3wssCUgsIrx5m4VIHXaagNvk2k%3D&az=oaivgprodscus'
    },
    {
      id_admin: 1,
      title: "Crepúsculo: La nueva arena!",
      resume: "Te presento la Arena Crepúsculo: un coliseo de piedra oscura donde el viento silba entre grietas antiguas y las sombras se vuelven parte del combate.",
      content: { 
        paragraphs: [
          "La arena está ubicada en lo más profundo de las montañas, accesible solo a los más osados.",
          "El suelo está cubierto de grietas por donde emana una neblina mística que confunde a los contrincantes.",
          "Las estatuas que rodean la arena representan a guerreros olvidados, cuyos espíritus se dice que aún observan los combates.",
          "Cada atardecer, el sol se oculta tras la arena, bañando de rojo las piedras y dando inicio al combate más feroz."
        ] 
      },
      imageUrl: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k5wa39s5fdsb84x1es7ksb7x%2F1758665638_img_0.webp?st=2025-09-29T23%3A48%3A19Z&se=2025-10-06T00%3A48%3A19Z&sks=b&skt=2025-09-29T23%3A48%3A19Z&ske=2025-10-06T00%3A48%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=CKdWt%2F9hfVYzH9VuN3wssCUgsIrx5m4VIHXaagNvk2k%3D&az=oaivgprodscus',
    }
  ]);
}
