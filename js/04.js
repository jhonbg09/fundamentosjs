// Objetos

// const nombre = "Tablet";
// const precio = 300;
// const disponible = true;

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
console.log(producto);
console.table(producto);

// Acceder al objeto

console.log(producto.nombre);

//Destructuring

const {nombre, precio, disponible} = producto;

console.log(nombre , precio , disponible);

//Object Literal Enhancement

const autenticado = true;
const usuario = "Jhon";

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)