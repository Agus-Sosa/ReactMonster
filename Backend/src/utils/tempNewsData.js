import { News } from "../models/News.js";

export const tempNewsData =async()=> {
     await News.bulkCreate([
    {
      id_admin: 1,
      title: "Primera noticia",
      resume: "Resumen de la primera noticia",
      content: { paragraphs: ["Párrafo 1", "Párrafo 2"] }
    },
    {
      id_admin: 2,
      title: "Segunda noticia",
      resume: "Resumen de la segunda noticia",
      content: { paragraphs: ["Contenido inicial", "Contenido adicional"] }
    },
    {
      id_admin: 1,
      title: "Tercera noticia",
      resume: "Resumen de la tercera noticia",
      content: { paragraphs: ["Texto de ejemplo"] }
    }
  ]);
}