import { Arena } from "../models/Arena.js";


  const ArenaCaosArdente =  "\public\Arenas\ArenaCaosArdente.webp" ;

export const tempArenaData = async () => {
  await Arena.bulkCreate([
    {
      arena_name: "Arena Caos Ardente",
      arena_description: "En la Arena Caos Ardente, el suelo arde con brasas eternas y el aire vibra con el rugido de la guerra. Cada paso levanta chispas, cada golpe enciende la furia del campo. Solo los más valientes se atreven a desafiar el calor abrasador y el caos que consume a los débiles.",
      arena_location: "Firelands",
      arena_image_url: "https://cdna.artstation.com/p/assets/images/images/059/584/392/large/mofei-wang-1-lava-field-long.jpg?1676696313"
    },
    {
      arena_name: "Las Ruinas del Santuario Nocturno",
      arena_description: "desgastada por el tiempo, mientras las gigantescas raíces y la flora circundante emiten un resplandor místico azul y púrpura. Es un entorno ideal para el combate táctico, donde la atmósfera mágica contrasta con la intensidad de la batalla.",
      arena_location: "North Glacier",
      arena_image_url: "https://static.vecteezy.com/system/resources/previews/035/938/210/non_2x/ai-generated-2d-hero-battle-pvp-arena-background-casual-game-art-design-ai-generative-photo.jpg"
    },
    {
      arena_name: "El Umbral Escarlata",
      arena_description: "teñido de un eterno rojo carmesí, donde las reglas de la realidad son inestables. Esta arena de combate está construida sobre plataformas rocosas que desafían el vacío oscuro y amenazante que las rodea",
      arena_location: "Lost Valley",
      arena_image_url: "https://static.vecteezy.com/system/resources/previews/016/265/405/non_2x/game-battle-arena-in-hell-with-lava-free-vector.jpg"
    },
    {
      arena_name: "La Cima de los Éteres",
      arena_description: "suspendida a una altura vertiginosa sobre el reino de las nubes. Los héroes se enfrentan sobre un antiguo altar de piedra, rodeado de poderosas runas de energía arcana de color azul. El campo de batalla ofrece una vista inigualable del vasto cielo, siendo un lugar de duelo épico donde la magia y el vacío son amenazas constantes.",
      arena_location: "Lost Valley",
      arena_image_url: "https://static.vecteezy.com/system/resources/previews/016/263/201/non_2x/battle-arena-magic-altar-with-runes-in-blue-sky-free-vector.jpg"
    },
    {
      arena_name: "El Vórtice Astral",
      arena_description: "Se dice que este es el punto de encuentro de los Ecos Estelares, una fisura donde el tejido de la realidad se desgarra, revelando la inmensidad del cosmos. Solo los campeones con un destino preordenado son capaces de percibir este lugar.",
      arena_location: "Lost Valley",
      arena_image_url: "https://static.vecteezy.com/system/resources/previews/016/265/450/non_2x/battle-arena-magic-altar-with-runes-in-float-sky-free-vector.jpg"
    },
    {
      arena_name: "La Encrucijada de Cronos",
      arena_description: "Un lugar donde el tiempo mismo se detiene para presenciar el duelo de campeones. Esta arena no existe en el espacio, sino en el intervalo entre las eras, forjada a partir de la roca primigenia que precede a la creación. Se rumorea que cada victoria aquí altera ligeramente el destino de todos los mundos.",
      arena_location: "Lost Valley",
      arena_image_url: "https://static.vecteezy.com/system/resources/previews/016/962/628/non_2x/fantastic-stone-platform-against-space-background-free-vector.jpg"
    }

  ]);
};
