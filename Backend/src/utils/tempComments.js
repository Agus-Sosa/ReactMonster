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
      id_user: 8,
      id_post: 3,
      comment: "El que hicieron conmigo estaba mejor...",
      date: new Date(),
      edited: false,
      comment_state: true,
       },
       
      {
      id_user: 5,
      id_post: 3,
      comment: "Muy buen tp Muchachos... ¿Luigui fuiste a clases?",
      date: new Date(),
      edited: false,
      comment_state: true,
       },
      {
      id_user: 6,
      id_post: 3,
      comment: "No me gusto el mounstro que me hicieron 😡.",
      date: new Date(),
      edited: false,
      comment_state: true,
       },
      {
      id_user: 7,
      id_post: 3,
      comment: "No puedo escribir con el teclado en español pero buen tp muchachos 🤙",
      date: new Date(),
      edited: false,
      comment_state: true,
    }
    
  ]);
}