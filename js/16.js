//Otros Array Methods Utiles

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const numeros = [20, 30, 40, 50, 60,]

let nuevoArray;

// Filter
nuevoArray = tecnologias.filter(tech => {
    return tech !== "Node.js"
})

console.table(nuevoArray);

// podemos comprobar si un elemnto existe dentro del arreglo
const result = tecnologias.includes("React");

console.log("Resultado metodo includes(): " + result);

//some() -> no nos muestra cual es el numero o los numero que son mayor a 15 pero si nos dice qu alguno es mayo a 15
//la respuesta es boolena
//Almenos de algun numero es mayor a 15
const result2 = numeros.some(numero => numero > 15)
console.log("Resultado metodo some(): " + result2);

//find -> devuelve el primer elemento que cumpla la condicion 

const result3 = numeros.find(numero => numero > 15)
console.log("Resultado metodo find(): " + result3);

//every() -> Retorna true o false si todos cumplen la condicion la respuesta la devuelve con un booleano "true o false"

const result4 = numeros.every(numero => numero > 15)
console.log("Resultado metodo every(): " + result4);

//reduce() -> Realiza la suma de todos los elementos de un arreglo. Este metodo solo se utiliza para cantidades o numeros en los arreglos
//se utiliza mucho en la creacion de un carrito de compras
//este metodo toma dos parametros total=> es el acumulador | numeros => es el numero actual | 0 = desde que valor quiero que inicie la suma 
const result5 = numeros.reduce((total, numero) => numero  + total, 0);
console.log("Resultado metodo reduce(): " + result5)

// forEach
// Accede a cada elemento del arreglo solo itera en el.
tecnologias.forEach(tech=> console.log("Resultado metodo forEach(): " + tech));


// map
// Crea una copia del arreglo y accede a cada elemento
const arrayMap = tecnologias.map(tech => tech)
console.log("Resultado metodo map(): " + arrayMap);