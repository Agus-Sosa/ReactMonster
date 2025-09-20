import { Arena } from "../models/Arena.js";

export const tempArenaData = async () => {
  await Arena.bulkCreate([
    {
      arena_name: "Volcano Crater",
      arena_description: "A fiery battlefield surrounded by rivers of lava.",
      arena_location: "Firelands",
      arena_image_url: "https://placehold.co/200x200?text=Volcano+Arena"
    },
    {
      arena_name: "Frozen Wasteland",
      arena_description: "An icy arena where only the toughest survive the cold.",
      arena_location: "North Glacier",
      arena_image_url: "https://placehold.co/200x200?text=Frozen+Arena"
    },
    {
      arena_name: "Ancient Ruins",
      arena_description: "An arena built among fallen temples and forgotten relics.",
      arena_location: "Lost Valley",
      arena_image_url: "https://placehold.co/200x200?text=Ruins+Arena"
    }
  ]);
};
