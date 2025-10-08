import { Comments } from "../models/Comments.js";
export const tempComments =async()=> {
     await Comments.bulkCreate([
    {
      id_user: 1,
      id_post: 1,
      comment: "Este es el primer comentario de prueba.",
      date: new Date(),
      edited: false,
      comment_state: true,
    },
    {
      id_user: 2,
      id_post: 1,
      comment: "Me parece muy interesante este post.",
      date: new Date(),
      edited: false,
      comment_state: true,
    },
    {
      id_user: 3,
      id_post: 2,
      comment: "No estoy de acuerdo con algunos puntos.",
      date: new Date(),
      edited: false,
      comment_state: true,
    },
    {
      id_user: 1,
      id_post: 3,
      comment: "Excelente aporte, gracias por compartir!",
      date: new Date(),
      edited: false,
      comment_state: true,
    }
  ]);
}