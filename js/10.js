// Destructring de arrays

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// De esta manera podemos hacer destructuring de un array

// const [var1, var2,var3, var4, var5 ] = tecnologias
// En JavaScript cuando hacemos destructuring de un array va tomando las posiciones (index) mas no el nombre de la variable
// console.log(var1)
// console.log(var2)
// console.log(var3)
// console.log(var4)
// console.log(var5)

// Otra manera de hacer estructuring cuando se tiene un array.
// Voy a tomar el ultimo valor del array
const [ , , , , var5] = tecnologias;

// Cada coma va a ser una posicion (index) del Array

console.log(var5);