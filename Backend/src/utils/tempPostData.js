import { Post } from "../models/Post.js";
export const tempPostData = async () => {
    
  await Post.bulkCreate([
      {
    id_admin: 1,
    title: "El Guardián del Bosque Sombrío",
    id_user: 1,
    resume: "Un ser ancestral que protege los secretos de un bosque donde la luz apenas se atreve a entrar.",
    id_category: 2,
    content: `Se dice que sus ojos brillan con el reflejo de las estrellas ocultas.
Protege a quienes respetan el bosque, pero castiga a los intrusos.
Las leyendas cuentan que nació del primer árbol caído por el rayo.
A su paso, las hojas susurran historias olvidadas.`,
    imageUrl: "https://cdn.pixabay.com/photo/2020/10/01/12/37/forest-5620529_1280.jpg"
  },
  {
    id_admin: 2,
    title: "La Hechicera del Lago",
    id_user: 2,
    resume: "Una mujer atrapada entre la magia y la condena, cuyos cantos resuenan bajo la superficie del agua.",
    id_category: 3,
    content: `Quienes escuchan su voz sienten un extraño deseo de sumergirse.
Habita en lo profundo, entre algas y corrientes heladas.
Algunos dicen que busca redención, otros que busca compañía.
Su reflejo nunca es igual: cambia con la fase de la luna.`,
    imageUrl: "https://cdn.pixabay.com/photo/2016/11/18/16/19/woman-1834399_1280.jpg"
  },
  {
    id_admin: 1,
    title: "El Errante de las Arenas",
    id_user: 3,
    resume: "Un viajero cubierto de polvo y fuego que nunca detiene su marcha en el desierto.",
    id_category: 1,
    content: `Su silueta se ve en el horizonte, incluso bajo tormentas de arena.
Afirma haber cruzado tierras donde el sol nunca se oculta.
Su bastón guarda inscripciones de un lenguaje olvidado.
Al caer la noche, las arenas parecen seguirlo como si lo obedecieran.`,
    imageUrl: "https://cdn.pixabay.com/photo/2020/05/15/17/27/desert-5174479_1280.jpg"
  },
  {
    id_admin: 3,
    title: "El Vigía de la Torre Olvidada",
    id_user: 2,
    resume: "Un centinela que nunca abandonó su puesto, incluso después de la caída de su reino.",
    id_category: 2,
    content: `Se mantiene de pie, inmóvil, observando con ojos apagados.
La torre que custodia se derrumba, pero él sigue firme.
Algunos viajeros dicen haberlo visto moverse en la penumbra.
Nadie recuerda su nombre, pero todos conocen su presencia.`,
    imageUrl: "https://cdn.pixabay.com/photo/2017/08/01/08/29/ruins-2567576_1280.jpg"
  }
   
  ]);
}