// Unir dos objetos o mas

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}


const cliente = {
    nombre: "Jhon",
    premiun: true
}


// Hay que tener en cuenta que e objeto no se debe modificar 
// Metodo 1

// const nuevoObjeto = Object.assign(producto, cliente) No funciona este metodo por que se pierden datos 
// console.table(nuevoObjeto)

const nuevoCliente2 = {
    producto:{...producto}, 
    cliente:{...cliente}
}
console.table(nuevoCliente2)