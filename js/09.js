// Operaciones en los arreglos

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// Añadir elementos al Array

//tecnologias.push('GraphQL') Añade elementos al final del array
//tecnologias.unshift('GraphQL') Añade elementos al inicio del array
//Hay que tener encuenta que no se debe modificar el arreglo original por eso se puede hacer este metodo

// const nuevoArray = [...tecnologias, 'GraphQL']
// console.table(nuevoArray);
// Eliminar elementos del Array

// tecnologias.pop(); Elimina el elemento al final del array
// tecnologias.shift() Elimina el elemento al inicio del array
//tecnologias.splice(2, 1); // Elimina de una posicion en especifica

const nuevoArray = tecnologias.filter((tech) => tech !== "HTML");

// Como reemplazar elementos

const nuevoArr = tecnologias.map((tech) => {
  if (tech === "HTML") {
    return "Vue.js";
  } else {
    return tech;
  }
});

console.table(tecnologias);
console.table(nuevoArray);
console.table(nuevoArr);
