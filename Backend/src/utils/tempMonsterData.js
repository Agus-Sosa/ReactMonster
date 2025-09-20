import { Monster } from "../models/Monster.js";

const monster_name = ["Drakon", "Inferno", "Aqua", "Golem", "Spectra", "Voltaris", "Lunaris"];
const monster_class = ["Mage", "Warrior", "Tank", "Assassin", "Balanced"];
const monster_descriptions = [
  "A fearsome creature with blazing powers.",
  "Mysterious being from the ancient forests.",
  "Guardian of the forgotten ruins.",
  "Swift and deadly, strikes without warning.",
  "Balanced fighter, master of multiple skills."
];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export async function tempMonsterData(amount = 10) {
  for (let i = 0; i < amount; i++) {
    await Monster.create({
      monster_class: randomItem(monster_class),
      monster_name: `${randomItem(monster_name)} ${Math.floor(Math.random() * 1000)}`,
      monster_description: randomItem(monster_descriptions),
      monster_image_url: `https://placehold.co/200x200?text=Monster+${i + 1}`,
    });
  }

  console.log(`✅ ${amount} monsters generated`);
}
