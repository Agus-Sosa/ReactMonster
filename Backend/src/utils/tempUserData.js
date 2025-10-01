import { User } from "../models/User.js";
import bcrypt from 'bcrypt'
export const tempUserData = async () => {
  const count = await User.count();
  if (count > 0) return; // ya existen usuarios, no hace nada

const users = [
    {
      user_name: "juanp",
      user_email: "juanp@example.com",
      user_password: await bcrypt.hash("Password123", 10),
      profile_picture: "https://avatars.githubusercontent.com/u/144922697?v=4",
      role: "user"
    },
    {
      user_name: "mariaa",
      user_email: "mariaa@example.com",
      user_password: await bcrypt.hash("Secret456", 10),
      role: "user"
    },
    {
      user_name: "admin",
      user_email: "admin@example.com",
      user_password: await bcrypt.hash("Admin789", 10),
      role: "admin"
    }
  ];

  await User.bulkCreate(users);
  console.log("Usuarios iniciales creados!");
};