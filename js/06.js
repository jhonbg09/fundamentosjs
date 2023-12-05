//Destructuring de dos objetos o mas

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Jhon",
    premiun: true
}


const {nombre, precio,  disponible} = producto
const {nombre: nombreCliente, premiun} = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premiun)