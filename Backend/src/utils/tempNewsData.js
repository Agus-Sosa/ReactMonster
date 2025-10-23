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
  }
]);

}
