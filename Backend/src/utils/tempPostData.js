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
    title: "¡Desatamos a las bestias del código!",
    id_user: 3,
    resume: "El proyecto “ReactMonster” combina creatividad y React para dar vida a monstruos digitales tan impredecibles como divertidos.",
    id_category: 1,
    content: `Después de incontables líneas de código, errores dignos de una película de terror y algún que otro susto en consola, el trabajo práctico “ReactMonster” finalmente cobró vida. Este proyecto no fue solo un ejercicio técnico, sino una experiencia creativa donde mezclamos lógica, diseño y un poco de locura para construir criaturas digitales únicas.
Cada monstruo tiene su propia personalidad, poderes y estilo visual, fruto de la imaginación (y la paciencia) del equipo. “ReactMonster” nos enseñó que programar no siempre es domar el caos, sino aprender a convivir con él… especialmente cuando el caos tiene garras, dientes y un useEffect que se ejecuta más veces de las que debería.`,
    
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