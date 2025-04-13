// Alumna: Ana Paula Paz//
// 1: Estructura de datos
const libros = [
  {
    id: 1,
    título: "Lolita",
    autor: "Vladimir Nabokov",
    año: 1955,
    género: "novela",
    disponible: false,
  },
  {
    id: 2,
    título: "Crepúsculo",
    autor: "Stephenie Meyer",
    año: 2005,
    género: "Ficcion romantica",
    disponible: true,
  },
  {
    id: 3,
    título: "Maus",
    autor: "Art Spiegelman",
    año: 1977,
    género: "Biografico",
    disponible: true,
  },
  {
    id: 4,
    título: "El mar y la serpiente",
    autor: "Paula Bombara",
    año: 2005,
    género: "Novela",
    disponible: false,
  },
  {
    id: 5,
    título: "Rayuela",
    autor: "Julio cortazar",
    año: 1963,
    género: "Novela",
    disponible: false,
  },
  {
    id: 6,
    título: "La metamorfosis",
    autor: "Franz Kafka",
    año: 1915,
    género: "Narrativo",
    disponible: false,
  },
  {
    id: 7,
    título: "Coraline",
    autor: "Neil Gaiman",
    año: 2002,
    género: "Literatura fantastica",
    disponible: true,
  },
  {
    id: 8,
    título: "El principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943,
    género: "Novela",
    disponible: false,
  },
  {
    id: 9,
    título: "Lo que el viento se llevó",
    autor: "Margaret Mitchell",
    año: 1963,
    género: "Ficcion historica",
    disponible: true,
  },
  {
    id: 10,
    título: "Memorias de una geisha",
    autor: "Arthur Golden",
    año: 1997,
    género: "Novela",
    disponible: true,
  },
];

const usuarios = [
  {
    id: 1,
    nombre: "Ana Paz",
    email: "ana@hotmail.com",
    librosPrestados: [1, 2],
  },
  {
    id: 2,
    nombre: "Clara Aranda",
    email: "clara@gmail.com",
    librosPrestados: [3, 4],
  },
  {
    id: 3,
    nombre: "Gaston Andrada",
    email: "gaston@hotmail.com",
    librosPrestados: [5, 6],
  },
  {
    id: 4,
    nombre: "Ernestina Diaz",
    email: "ernestina@gmail.com",
    librosPrestados: [7, 8],
  },
  {
    id: 5,
    nombre: "Lucia Jones",
    email: "lucia@gmail.com",
    librosPrestados: [9, 10],
  },
];
//2a Funcion de Gestion de libros//
/* 
function addLibro(id, titulo, autor, año, genero) {
  let newLibro = {
    id: id,
    titulo: titulo,
    autor: autor,
    año: año,
    genero: genero,
    disponible: true,
  };
  libros.push(newLibro);
}
addLibro(11, "Ana la de tejas verdes", "Lucy Maud", 1908, "Literatura juvenil");
 */
//2b
/* function buscarLibro(criterio, valor) {
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
console.log(buscarLibro('genero','biografico')) */
//2d
/* function borrarLibro(id){
  let indice =libros.findIndex(libro => libro.id === id);
  if (indice !== -1){
    libros.splice(indice, 1);
    console.log(`libro id:${id} eliminado.`)
  } else{
    console.log(`el libro solicitado ${id} no se encontro`)
  }
}
borrarLibro(1);
console.log(libros); */
//3a
/* function RegistrarUsuario(nombre, email) {
  let newUser = {
    nombre: nombre,
    email: email,
  };
  usuarios.push(newUser);
} */
//3b Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
/* RegistrarUsuario("Laura", "lau@gmail.com");
console.log(usuarios);
function mostrarTodosLosUsuarios(){
    return usuarios;
} 
console.log(mostrarTodosLosUsuarios());*/
//3c Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
/* function findUserEmail(email) {
  const usuario = usuarios.find((usuario) => usuario.email === email);
  if (usuario) {
    return usuario;
  } else {
    return "usuario no encontrado";
  }
}
console.log(findUserEmail("gaston@hotmail.com")); */
//3d Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
/* function borrarUser(nombre, email){
    let userEliminado = false;
    while (usuarios.length > 0){
        if (usuarios[0].nombre === nombre && usuarios[0].email){
            usuarios.shift();
            userEliminado= true;
            console.log(`Usuario ${nombre} eliminado correctamente`);
            break;
        } else{
            usuarios.push(usuarios.shift());
        }
    }
if (!userEliminado){
    console.log('Usuario no encontrado')
}
}
borrarUser("Lucia Jones",'lucia@gmail.com');
console.log(usuarios); */
//4a a)	Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y
// lo agregue a la lista de libros prestados del usuario. Luego mostrar que libro se prestó y a que usuario.
/* function prestarLibro(idLibro, idUsuario) {
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
    console.log(`El libro ${libro.título} no esta disponible`);
    return;
  }
  libro.disponible = false;
  usuario.librosPrestados.push(libro);
  console.log(`el libro ${libro.título}fue prestado a ${usuario.nombre}`);
}
prestarLibro(1,1);
console.log(usuarios[0]);
 */
//4b b)	Implementar una función devolverLibro(idLibro, idUsuario) que marque un
// libro como disponible y lo elimine de la lista de libros prestados del usuario.
/* function devolverLibro(idLibro, idUsuario){
  let libro= libros.find(libro => libro.id === idLibro);
  let usuario =usuarios.find(user => user.id === idUsuario);
  if(!libro){
    console.log(`libro ${idLibro} no encontrado`);
    return;
  }
  if(!usuario){
    console.log(`usuario ${idUsuario} mo encontrado`);
    return;
  }
  let iLibrosPrestados = usuario.librosPrestados.findIndex(libro => libro.id === idLibro);
  if(iLibrosPrestados === -1){
    console.log(`el usuario ${usuario.nombre} no tiene el libro ${idLibro}`);
    return;
  }
usuario.librosPrestados.splice(iLibrosPrestados, 1);
libro.disponible= true;
console.log(`El libro ${libro.título} lo devolvio ${usuario.nombre}`)
}

devolverLibro(2, 1);
console.log(usuarios[0]);
console.log(libros);
 */