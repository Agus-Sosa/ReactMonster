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
    
  },
  {
    id_admin: 1,
    title: "Monstruos a Medida: Porque el Horror También Merece Estilo",
    id_user: 3,
    resume: "Monstruos únicos, diseñados con humor, locura y un toque de elegancia.",
    id_category: 1,
    content: `¿Cansado de los mismos orcos genéricos y demonios reciclados? En nuestro taller de diseño monstruoso, convertimos tus pesadillas (y tus ideas más absurdas) en criaturas únicas, con personalidad, actitud y un sentido del humor tan retorcido como el nuestro.

Cada monstruo es diseñado a mano —con amor, detalle y una saludable dosis de locura— para que destaque en tu mundo, historia o juego. Ya sea un dragón con problemas de autoestima, una gárgola fashionista o un zombie que solo quiere un aumento de sueldo, le damos vida a lo imposible con un toque profesional y un guiño cómplice.

Porque sí, lo admitimos: nos tomamos muy en serio el arte de hacer cosas aterradoras... pero con estilo.`,
    
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
   
  },
  {
    id_admin: 2,
    title: "La Hechicera del Lago",
    id_user: 2,
    resume: "Una mujer atrapada entre la magia y la condena, cuyos cantos resuenan bajo la superficie del agua.",
    id_category: 4,
    content: `Quienes escuchan su voz sienten un extraño deseo de sumergirse.
Habita en lo profundo, entre algas y corrientes heladas.
Algunos dicen que busca redención, otros que busca compañía.
Su reflejo nunca es igual: cambia con la fase de la luna.`,
    
  }
   
  ]);
}