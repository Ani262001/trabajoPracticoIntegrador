// Alumna: Ana Paula Paz//
// 1: Estructura de datos
const libros = [
  {
    id: 1,
    titulo: "Lolita",
    autor: "Vladimir Nabokov",
    anio: 1955,
    genero: "Novela",
    disponible: false,
  },
  {
    id: 2,
    titulo: "Crepúsculo",
    autor: "Stephenie Meyer",
    anio: 2005,
    genero: "Ficcion romantica",
    disponible: true,
  },
  {
    id: 3,
    titulo: "Maus",
    autor: "    Art Spiegelman",
    anio: 1977,
    genero: "Biografico",
    disponible: true,
  },
  {
    id: 4,
    titulo: "El mar y la serpiente",
    autor: "Paula Bombara      ",
    anio: 2005,
    genero: "Novela",
    disponible: false,
  },
  {
    id: 5,
    titulo: "Rayuela",
    autor: "Julio cortazar",
    anio: 1963,
    genero: "Novela",
    disponible: false,
  },
  {
    id: 6,
    titulo: "La metamorfosis",
    autor: "Franz Kafka",
    anio: 1915,
    genero: "Narrativo",
    disponible: false,
  },
  {
    id: 7,
    titulo: "Coraline",
    autor: "Neil Gaiman",
    anio: 2002,
    genero: "Literatura fantastica",
    disponible: true,
  },
  {
    id: 8,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    genero: "Novela",
    disponible: false,
  },
  {
    id: 9,
    titulo: "Lo que el viento se llevó",
    autor: "Margaret Mitchell",
    anio: 1963,
    genero: "Ficcion historica",
    disponible: true,
  },
  {
    id: 10,
    titulo: "Memorias de una geisha",
    autor: "Arthur Golden",
    anio: 1997,
    genero: "Novela",
    disponible: true,
  },
];

const usuarios = [
  {
    id: 1,
    nombre: "Ana Paz",
    email: "ANa@hotmail.com",
    librosPrestados: [1, 2],
  },
  {
    id: 2,
    nombre: "Clara Aranda",
    email: "CLara@gmail.com",
    librosPrestados: [3, 4],
  },
  {
    id: 3,
    nombre: "Gaston Andrada",
    email: "gastOn@hotmail.com",
    librosPrestados: [5, 6],
  },
  {
    id: 4,
    nombre: "Ernestina Diaz",
    email: "ernesTINA@gmail.com",
    librosPrestados: [7, 8],
  },
  {
    id: 5,
    nombre: "Lucia Jones",
    email: "luciA@gmail.com",
    librosPrestados: [9, 10],
  },
];
//2a Funcion de Gestion de libros//

function addLibro(id, titulo, autor, año, genero) {
  let newLibro = {
    id: id,
    titulo: titulo,
    autor: autor,
    anio: anio,
    genero: genero,
    disponible: true,
  };
  libros.push(newLibro);
}
addLibro(11, "Ana la de tejas verdes", "Lucy Maud", 1908, "Literatura juvenil");

//2b
function buscarLibro(criterio, valor) {
  criterio = criterio.toLowerCase();
  valor = valor.toLowerCase();
  const libro = libros.find((libro) => {
    if (criterio === "titulo" && libro.título.toLowerCase() === valor) {
      return true;
    } else if (criterio === "autor" && libro.autor.toLowerCase() === valor) {
      return true;
    } else if (criterio === "genero" && libro.género.toLowerCase() === valor) {
      return true;
    }
    return false;
  });
  return libro ? libro : "No encontrado :(";
}
console.log(buscarLibro("titulo", "Lolita"));
console.log(buscarLibro("genero", "biografico"));
//2d
function borrarLibro(id) {
  let indice = libros.findIndex((libro) => libro.id === id);
  if (indice !== -1) {
    libros.splice(indice, 1);
    console.log(`libro id:${id} eliminado.`);
  } else {
    console.log(`el libro solicitado ${id} no se encontro`);
  }
}
borrarLibro(1);
console.log(libros);
//3a
function RegistrarUsuario(nombre, email) {
  let newUser = {
    nombre: nombre,
    email: email,
  };
  usuarios.push(newUser);
}
//3b Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
RegistrarUsuario("Laura", "lau@gmail.com");
console.log(usuarios);
function mostrarTodosLosUsuarios() {
  return usuarios;
}
console.log(mostrarTodosLosUsuarios());
//3c Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
function findUserEmail(email) {
  const usuario = usuarios.find((usuario) => usuario.email === email);
  if (usuario) {
    return usuario;
  } else {
    return "usuario no encontrado";
  }
}
console.log(findUserEmail("gaston@hotmail.com"));
//3d Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
function borrarUser(nombre, email) {
  let userEliminado = false;
  while (usuarios.length > 0) {
    if (usuarios[0].nombre === nombre && usuarios[0].email) {
      usuarios.shift();
      userEliminado = true;
      console.log(`Usuario ${nombre} eliminado correctamente`);
      break;
    } else {
      usuarios.push(usuarios.shift());
    }
  }
  if (!userEliminado) {
    console.log("Usuario no encontrado");
  }
}
borrarUser("Lucia Jones", "lucia@gmail.com");
console.log(usuarios);
//4a a)	Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y
// lo agregue a la lista de libros prestados del usuario. Luego mostrar que libro se prestó y a que usuario.
function prestarLibro(idLibro, idUsuario) {
  let libro = libros.find((libro) => libro.is === idLibro);
  let usuario = usuarios.find((user) => user.id === idUsuario);
  if (!libro) {
    console.log(`El libro ${idLibro} no se encontro`);
    return;
  }
  if (!usuario) {
    console.log(`Usuario ${idUsuario} no se encontro`);
  }
  if (!libro.disponible) {
    console.log(`El libro ${libro.titulo} no esta disponible`);
    return;
  }
  libro.disponible = false;
  usuario.librosPrestados.push(libro);
  console.log(`el libro ${libro.titulo}fue prestado a ${usuario.nombre}`);
}
prestarLibro(1, 1);
console.log(usuarios[0]);

//4b b)	Implementar una función devolverLibro(idLibro, idUsuario) que marque un
// libro como disponible y lo elimine de la lista de libros prestados del usuario.
function devolverLibro(idLibro, idUsuario) {
  let libro = libros.find((libro) => libro.id === idLibro);
  let usuario = usuarios.find((user) => user.id === idUsuario);
  if (!libro) {
    console.log(`libro ${idLibro} no encontrado`);
    return;
  }
  if (!usuario) {
    console.log(`usuario ${idUsuario} mo encontrado`);
    return;
  }
  let iLibrosPrestados = usuario.librosPrestados.findIndex(
    (libro) => libro.id === idLibro
  );
  if (iLibrosPrestados === -1) {
    console.log(`el usuario ${usuario.nombre} no tiene el libro ${idLibro}`);
    return;
  }
  usuario.librosPrestados.splice(iLibrosPrestados, 1);
  libro.disponible = true;
  console.log(`El libro ${libro.titulo} lo devolvio ${usuario.nombre}`);
}

devolverLibro(2, 1);
console.log(usuarios[0]);
console.log(libros);

/* 5 a)	Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
✔	Cantidad total de librosd.
✔	Cantidad de libros prestados.
✔	Cantidad de libros por género.
✔	Libro más antiguo y más nuevo
 */
function generarReporteLibros() {
  let totalLibros = libros.length;
  let librosPrestados = libros.filter((libro) => !libro.disponible).length;
  let librosPorGenero = libros.reduce((ac, libro) => {
    ac[libro.genero] = (ac[libro.genero] || 0) + 1;
    return ac;
  }, {});
  let libroMasAntiguo = libros.reduce((masAntiguo, libro) =>
    libro.anio < masAntiguo.anio ? libro : masAntiguo
  );
  let libroMasNuevo = libros.reduce((masNuevo, libro) =>
    libro.anio > masNuevo.anio ? libro : masNuevo
  );
  let reporte = {
    totalLibros,
    librosPorGenero,
    librosPrestados,
    libroMasAntiguo: `${libroMasAntiguo.titulo}(${libroMasAntiguo.anio})`,
    libroMasNuevo: `${libroMasNuevo.titulo}(${libroMasNuevo.anio})`,
  };
  console.log("Reporte de los libros:");
  console.log(reporte);
  return reporte;
}
generarReporteLibros();
/* 6 a)	Implementar una función librosConPalabrasEnTitulo() que identifique y muestre 
los títulos de los libros que contienen más de una palabra. Además la función debe excluir 
aquellos títulos que contengan números y/o caracteres especiales. Por último mostrar en la consola el array resultante.  */
function librosConPalabrasEnTitulo() {
  let resultado = libros
    .filter((libro) => {
      if (!libro.titulo) return false;
      const titulo = libro.titulo;
      let tieneMasDeUnaPalabra = titulo.split(" ").length > 1;
      let esValido = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/.test(titulo);
      return tieneMasDeUnaPalabra && esValido;
    })

    .map((libro) => libro.titulo);
  console.log(`Titulos validos con mas de una palabra:`);
  console.log(resultado);
}
librosConPalabrasEnTitulo();

/* 7. Cálculos Estadísticos
a)	Desarrollar una función calcularEstadisticas() que obtenga información sobre los años
 de publicación de los libros:
✔	Obtener un array con los años de publicación de todos los libros.
✔	Calcular el promedio de los años de publicación.
✔	Encontrar el año de publicación más frecuente.
✔	Calcular la diferencia en años entre el libro más antiguo y el más nuevo. Para este punto es recomendable usar el objeto Math()
 */
function calcularEstadisticas() {
  const anios = libros.map((libro) => libro.anio);

  let suma = 0;
  for (let i = 0; i < anios.length; i++) {
    suma += anios[i];
  }
  let promedio = suma / anios.length;

  let frecuencia = {};
  for (let i = 0; i < anios.length; i++) {
    let anio = anios[i];
    if (frecuencia[anio]) {
      frecuencia[anio]++;
    } else {
      frecuencia[anio] = 1;
    }
  }

  let añoMasFrecuente = null;
  let maxRepeticiones = 0;
  for (let anio in frecuencia) {
    if (frecuencia[anio] > maxRepeticiones) {
      maxRepeticiones = frecuencia[anio];
      añoMasFrecuente = anio;
    }
  }
  let añoMasAntiguo = Math.min(...anios);
  let añoMasNuevo = Math.max(...anios);
  let diferencia = añoMasNuevo - añoMasAntiguo;
  console.log("Años de publicación:", anios);
  console.log("Promedio:", promedio);
  console.log("Año más frecuente:", añoMasFrecuente);
  console.log(
    "Diferencia entre más antiguo y más nuevo:",
    diferencia + " años"
  );
}

calcularEstadisticas();
/* 8a)	Crear una función normalizarDatos() que utilice métodos de strings para:
✔	Convertir todos los títulos a mayúsculas.
✔	Eliminar espacios en blanco al inicio y final de los nombres de autores.
✔	Formatear los emails de los usuarios a minúsculas.
*/
function normalizarDatos() {
  for (let i = 0; i < libros.length; i++) {
    libros[i].titulo = libros[i].titulo.toLocaleUpperCase();
    libros[i].autor = libros[i].autor.trim();
  }
  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].email = usuarios[i].email.toLocaleLowerCase().trim();
  }
  console.log("libros normalizados:");
  console.log(libros);
  console.log("usuarios normalizados:");
  console.log(usuarios);
}
normalizarDatos();

/* 9a)	Implementar una función menuPrincipal()
 que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt(). */
function menuPrincipal() {
  let option;
  while (option !== "0") {
    option = prompt(
      "Menu principal:\n" +
        "1.Ver libros\n" +
        "2.Ver usuarios\n" +
        "3.Normalizar datos\n" +
        "4.Calcular estadisticasn\n" +
        "5.Generar reporte de libros\n" +
        "6.Libros con titulos validos\n" +
        "0.Salir\n\n" +
        "Elegi una opcion:"
    );
    switch (option) {
      case "1":
        console.log("Libros:");
        console.log(libros);
        break;
      case "2":
        console.log("usuarios");
        console.log(usuarios);
        break;
      case "3":
        normalizarDatos();
        break;
      case "4":
        calcularEstadisticas();
      case "5":
        generarReporteLibros();
        break;
      case "6":
        librosConPalabrasEnTitulo();
      case "0":
        alert("Nos vemos");
        break;
      default:
        alert("No ha señalado una opcion");
    }
  }
}
menuPrincipal();
