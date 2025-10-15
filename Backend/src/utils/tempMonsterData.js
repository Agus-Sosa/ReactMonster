import { Monster } from "../models/Monster.js";

const monster_name = ["Drakon", "Inferno", "Aqua", "Golem", "Spectra", "Voltaris", "Lunaris"];
const monster_role= ["Mage", "Warrior", "Tank", "Assassin", "Balanced"];
const monster_descriptions = [
  "Una criatura temible cuyos poderes llameantes pueden incinerar todo a su paso. Las leyendas dicen que sus llamas nacen del corazón de la tierra, lo que la convierte en una fuerza casi imparable cuando se enfurece. Su sola presencia hace temblar el aire a su alrededor.",
  "Un ser misterioso proveniente de los bosques antiguos, envuelto en niebla y susurros. Su presencia altera la naturaleza misma, y muchos creen que protege el equilibrio de la vida en el interior del bosque. Aquellos que lo han visto aseguran que sus ojos reflejan siglos de sabiduría y secretos ocultos.",
  "El eterno guardián de unas ruinas olvidadas, atado por un juramento sagrado a defender secretos que la humanidad ya no recuerda. Su fuerza crece con cada siglo, alimentada por las reliquias que custodia. Pocos han osado desafiarlo y ninguno ha regresado para contarlo.",
  "Ágil y letal, este monstruo ataca sin previo aviso, moviéndose como una sombra entre sus enemigos. Su velocidad es tal que el ojo humano apenas puede seguirlo, y cada golpe suyo llega con una precisión devastadora. Enfrentarlo es lo mismo que desafiar a la misma oscuridad.",
  "Un luchador equilibrado, maestro de múltiples habilidades, capaz de adaptarse a cualquier oponente. Su versatilidad lo convierte en un adversario impredecible y un verdadero dolor de cabeza para los estrategas. Combina fuerza, agilidad y astucia, lo que lo hace un rival casi imposible de anticipar."
];

const monster_image_url = [
"https://videos.openai.com/vg-assets/assets%2Ftask_01k5pf7v7pfke87ajsabf7b3es%2F1758469675_img_0.webp?se=2025-10-21T20%3A54%3A36Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-15T20%3A13%3A04Z&ske=2025-10-22T20%3A18%3A04Z&sks=b&skv=2024-08-04&sig=cfd5kZBoXrk0Ufz/%2Bh3CvKW5fHo3PJAeVT9F3npbm0M%3D&az=oaivgprodscus",
"https://videos.openai.com/vg-assets/assets%2Ftask_01k5m4m3hffg0t2388j31f5vw6%2F1758391431_img_0.webp?se=2025-10-21T20%3A54%3A36Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-15T20%3A13%3A04Z&ske=2025-10-22T20%3A18%3A04Z&sks=b&skv=2024-08-04&sig=5JJ2vH%2BpT1qNYcZ5Yh26L8ixN4N2sFewxwndiblKb9Q%3D&az=oaivgprodscus",
  "https://videos.openai.com/vg-assets/assets%2Ftask_01k6c45k0zfhdt8z6bx9sy4sbt%2F1759196233_img_0.webp?se=2025-10-21T20%3A54%3A28Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-15T20%3A13%3A04Z&ske=2025-10-22T20%3A18%3A04Z&sks=b&skv=2024-08-04&sig=gIE4wReorAidy/RM0EHYiWr8et7tW/b20ERqRrKdZNM%3D&az=oaivgprodscus",
  "https://videos.openai.com/vg-assets/assets%2Ftask_01k5m4bfy5egmvppk5jpe892xs%2F1758391145_img_0.webp?se=2025-10-21T20%3A54%3A36Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-15T20%3A13%3A04Z&ske=2025-10-22T20%3A18%3A04Z&sks=b&skv=2024-08-04&sig=qqGjWVoT6VTggtLL2IvIwawaHqBMUgWqvsLBgWBh2Bo%3D&az=oaivgprodscus",
"https://videos.openai.com/vg-assets/assets%2Ftask_01k5pfcdxtfmj9cd03gcrb4cz0%2F1758469829_img_0.webp?se=2025-10-21T20%3A54%3A35Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-15T20%3A13%3A04Z&ske=2025-10-22T20%3A18%3A04Z&sks=b&skv=2024-08-04&sig=tlNjd%2BvMPzUu5Imxvrzu1r3/ZQ4mXPgzIY9IXObIvEM%3D&az=oaivgprodscus"
]

const monster_image_hero = [
  'https://videos.openai.com/vg-assets/assets%2Ftask_01k5vvsp78e1ash2e12bt3bd3a%2F1758650602_img_0.webp?st=2025-09-23T17%3A02%3A02Z&se=2025-09-29T18%3A02%3A02Z&sks=b&skt=2025-09-23T17%3A02%3A02Z&ske=2025-09-29T18%3A02%3A02Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=YXT2AVjBDNV3tJ2RaVaeWjQMem9xj%2FMfnirg9Putz0E%3D&az=oaivgprodscus'
]

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export async function tempMonsterData(amount = 10) {
  for (let i = 0; i < amount; i++) {
    await Monster.create({
      monster_role: randomItem(monster_role),
      monster_name: `${randomItem(monster_name)} ${Math.floor(Math.random() * 1000)}`,
      monster_description: randomItem(monster_descriptions),
      monster_image_url: randomItem(monster_image_url),
      monster_image_hero: randomItem(monster_image_hero)
    });
  }

  console.log(`✅ ${amount} monsters generated`);
}
