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
    
    },
  {
    id_admin: 1,
    title: "Anatomía de un Monstruo: Base de Datos NoSQL para ReactMonster",
    id_user: 5,
    resume: "Diseñamos una base de datos flexible (NoSQL) para almacenar las estadísticas, habilidades y evolución impredecible de cada 'ReactMonster'.",
    id_category: 4, 
    content: `El caos de nuestros monstruos exigía una base de datos tan flexible como ellos. Abandonamos lo rígido del SQL y nos pasamos a NoSQL para poder manejar las mutaciones inesperadas de las criaturas sin tener que reestructurar todo el esquema. Tuvimos que aprender a modelar documentos anidados para representar los 'genes' del monstruo. El resultado: una base de datos que permite que un monstruo de hielo tenga de repente una habilidad de fuego... y que la aplicación en React no se rompa en el intento.`,
  },
  {
    id_admin: 3,
    title: "La Estética de la Abominación: Diseño UI/UX para la Invocación",
    id_user: 8,
    resume: "Detrás de cada monstruo aterrador hay una interfaz de usuario bien pensada. Trabajamos en el proceso de 'invocación' y gestión del equipo.",
    id_category: 3, 
    content: `¿Cómo presentas una criatura digital llena de colmillos y bugs sin espantar al usuario? Ese fue nuestro reto de UI/UX. Diseñamos la 'Pantalla de Invocación' de ReactMonster, buscando un equilibrio entre lo ominoso y lo funcional. Usamos animaciones CSS y transiciones en React para que cada monstruo se sintiera poderoso al aparecer. La lección clave: la experiencia de usuario es vital. Incluso un monstruo debe ser fácil de manejar si quieres que la gente lo ame (y no cierre la pestaña a los 3 segundos).`,
  },
  {
    id_admin: 1,
    title: "Blindando la Cripta: Seguridad y API de Habilidades de ReactMonster",
    id_user: 7,
    resume: "Implementamos seguridad robusta en la API que gestiona las habilidades y el inventario de ítems, protegiéndonos de los 'hackers-monstruo'.",
    id_category: 4, 
    content: `Nuestros 'ReactMonsters' son valiosos, por lo que tuvimos que blindar el servidor. Este sprint se dedicó a la seguridad de la API. Implementamos validación estricta para asegurarnos de que nadie pudiera inyectar código malicioso en la estadística de "fuerza" de su criatura. Utilizamos *tokens* para proteger el intercambio de datos, previniendo que un jugador creara un monstruo con un nivel de poder infinito (o peor, un monstruo con una dependencia cíclica). La ciberseguridad es la armadura que protege a nuestras bestias del código.`,
  },
  {
    id_admin: 1,
    title: "Refactorizando la Mutación: Limpieza y Mantenimiento del Código Base",
    id_user: 1,
    resume: "Una inmersión profunda en el código de ReactMonster para refactorizar componentes, mejorar la legibilidad y prepararnos para futuras expansiones.",
    id_category: 4,
    content: `Después de la euforia del lanzamiento, llegó la temida fase de limpieza. El código de ReactMonster se había vuelto tan caótico como la apariencia de algunas de sus criaturas. Nos enfocamos en refactorizar componentes funcionales a *hooks* cuando era necesario, nombrar las variables con criterio (adiós a 'tempVar2') y añadir documentación. La refactorización no solo nos quitó ese escalofrío al abrir el archivo, sino que hizo posible que los próximos monstruos, más complejos, puedan nacer sin destruir la estabilidad del proyecto.`,
    },
  {
    id_admin: 1,
    title: "¡Los Fans Crean al Próximo Monstruo! Votación Comunitaria",
    id_user: 4,
    resume: "Lanzamos una encuesta en la comunidad para que los jugadores votaran las características (tipo, habilidad y nombre) del próximo ReactMonster.",
    id_category: 1, 
    content: `La creatividad del equipo es limitada, ¡pero la de nuestra comunidad es infinita! Decidimos cederles las riendas en el desarrollo de la próxima criatura. 
    Abrimos una votación en React y el backend para que los usuarios eligieran tres parámetros clave: el tipo elemental, la habilidad definitiva y el nombre.
    Fue fascinante ver cómo la comunidad debatía y se ponía de acuerdo. Este ejercicio no solo aumentó el *engagement*, sino que nos recordó que las mejores ideas a veces vienen de quienes están jugando, y no solo de quienes están programando.`,
  },
  {
    id_admin: 1,
    title: "Foro de Batalla: Implementando un Sistema de Comentarios en Tiempo Real",
    id_user: 8,
    resume: "Integramos un sistema de comentarios y *feedback* en tiempo real para que los jugadores puedan debatir estrategias y reportar bugs directamente en la aplicación.",
    id_category: 1, 
    content: `Un juego de monstruos sin debate de estrategias no está completo.
    El proyecto actual se centró en construir un 'Foro de Batalla' dentro de la misma aplicación React.
    Utilizamos WebSockets para crear un sistema de comentarios instantáneo donde los jugadores pueden gritar su victoria o lamentar una derrota épica. El mayor desafío fue moderar el contenido (¡las pasiones se disparan!). Además, los jugadores ahora pueden reportar bugs directamente con un botón, convirtiendo a nuestra comunidad en el mejor equipo de control de calidad que podríamos pedir.`,
  }
   
  ]);
}