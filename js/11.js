// Iteradores en js
const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// forEach
// Accede a cada elemento del arreglo
const arrayForEach = tecnologias.forEach((tech)=>{
   return tech
})

// map
// Crea una copia del arreglo y accede a cada elemento
const arrayMap = tecnologias.map((tech)=>{
    return tech
})

console.table(arrayForEach)
console.table(arrayMap)