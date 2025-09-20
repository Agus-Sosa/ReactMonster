import { Monster } from "../models/Monster.js";

const monster_name = ["Drakon", "Inferno", "Aqua", "Golem", "Spectra", "Voltaris", "Lunaris"];
const monster_role= ["Mage", "Warrior", "Tank", "Assassin", "Balanced"];
const monster_descriptions = [
  "A fearsome creature with blazing powers.",
  "Mysterious being from the ancient forests.",
  "Guardian of the forgotten ruins.",
  "Swift and deadly, strikes without warning.",
  "Balanced fighter, master of multiple skills."
];
const monster_image_url = [
  'https://videos.openai.com/vg-assets/assets%2Ftask_01k5m4bfy5egmvppk5jpe892xs%2F1758391145_img_0.webp?st=2025-09-20T16%3A33%3A37Z&se=2025-09-26T17%3A33%3A37Z&sks=b&skt=2025-09-20T16%3A33%3A37Z&ske=2025-09-26T17%3A33%3A37Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=zpDYZf56ONBO4Iy6VHIgizeCu%2BOf1sxwP1H3yFvfUzs%3D&az=oaivgprodscus',
  'https://videos.openai.com/vg-assets/assets%2Ftask_01k5jjxkzeexybsatrmzd2wa62%2F1758339296_img_0.webp?st=2025-09-20T13%3A48%3A30Z&se=2025-09-26T14%3A48%3A30Z&sks=b&skt=2025-09-20T13%3A48%3A30Z&ske=2025-09-26T14%3A48%3A30Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=5o%2FXcChKLqlNiBKLGPd7e0cE8K6c170VMFPqNwjfrlA%3D&az=oaivgprodscus'
  
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
    });
  }

  console.log(`✅ ${amount} monsters generated`);
}
