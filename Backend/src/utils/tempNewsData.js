import { News } from "../models/News.js";
export const tempNewsData = async () => {
await News.bulkCreate([
  {
    id_admin: 1,
    title: "¡Presentacion de nuevo engendro!",
    resume: "Permíteme presentarte a Kael: un viajero marcado por una antigua maldición...",
    content: `
     Kael, el Elegido de las Sombras, fue hallado en el corazón de un templo en ruinas, donde ancestrales inscripciones profetizaban la llegada de un guerrero ungido por la noche eterna.

Aunque su figura proyecta una innegable oscuridad, su destino no es la aniquilación, sino restaurar el delicado equilibrio entre la luz y las tinieblas.

Su verdadera fuerza se manifiesta durante las noches sin luna, el cenit de su poder. Es entonces cuando la antigua maldición que lo ata se intensifica, y su aura se vuelve tan opresiva que doblega la voluntad de los más audaces.

En la batalla, Kael es una sombra en movimiento: su velocidad fantasmal le permite ejecutar ataques que parecen materializarse desde la nada, como si las tinieblas mismas hubieran tomado forma para luchar a su lado.
    `,
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01k5wa39s5fdsb84x1es7ksb7x%2F1758665638_img_0.webp?se=2025-10-21T20%3A54%3A33Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-15T20%3A13%3A04Z&ske=2025-10-22T20%3A18%3A04Z&sks=b&skv=2024-08-04&sig=sHGEiyAtelobhxk2hva%2BDMy8H914IniWVoTlKy0MpLo%3D&az=oaivgprodscus"
  },
  {
    id_admin: 2,
    title: "Finde Semana X2",
    resume: "¡Prepárate para el fin de semana doble!...",
    content: `
      ¡Prepárate para un fin de semana épico!

Doble de Experiencia: Desde el viernes a las 18:00 (hora local) hasta el domingo a medianoche, ¡todas tus partidas te otorgarán el doble de experiencia!

Cofres Mejorados: Los cofres especiales estarán activos durante todo el evento con un 30% adicional de probabilidad de obtener recompensas épicas. ¡Una oportunidad de oro!

Recompensa Exclusiva: Participa en 10 o más combates y recibe un ítem conmemorativo exclusivo que solo podrás conseguir durante este evento.

Objetivo: Queremos incentivar el trabajo en equipo y el uso de estrategias audaces. ¡Demuestra tu valía!
    `,
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01k5wa39s5fdsb84x1es7ksb7x%2F1758665638_img_0.webp?se=2025-10-21T20%3A54%3A33Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-15T20%3A13%3A04Z&ske=2025-10-22T20%3A18%3A04Z&sks=b&skv=2024-08-04&sig=sHGEiyAtelobhxk2hva%2BDMy8H914IniWVoTlKy0MpLo%3D&az=oaivgprodscus"
  },
  {
    id_admin: 1,
    title: "Crepúsculo: La nueva arena!",
    resume: "Te presento la Arena Crepúsculo...",
    content: `
      La Arena Olvidada yace oculta en lo más recóndito de las montañas, un santuario de combate solo accesible para aquellos con una audacia sin límites. Su suelo, un mosaico de grietas humeantes, exhala una neblina mística y perpetua que confunde a los incautos.

Alrededor, imponentes estatuas de piedra inmortalizan a los guerreros más feroces, ahora leyendas olvidadas que observan el destino de los recién llegados.

Es al caer la tarde cuando la magia culmina: el sol se precipita tras el horizonte de la arena, tiñendo las antiguas piedras de un rojo sangriento que marca el preludio del combate más brutal y desesperado.
    `,
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01k5wa39s5fdsb84x1es7ksb7x%2F1758665638_img_0.webp?se=2025-10-21T20%3A54%3A33Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-15T20%3A13%3A04Z&ske=2025-10-22T20%3A18%3A04Z&sks=b&skv=2024-08-04&sig=sHGEiyAtelobhxk2hva%2BDMy8H914IniWVoTlKy0MpLo%3D&az=oaivgprodscus"
  }
]);

}
