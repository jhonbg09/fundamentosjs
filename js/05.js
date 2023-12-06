// Objetos - Manipulacion

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// Object.freeze()
// Object.freeze(producto) con esta propiedad ya no me deja reescribir el objeto producto
console.table(producto);

//Object.seal()
// Object.seal(producto) no, esta propiedad si me deja modificar los atributos pero no me deja crear ni eliminar propiedades 
//Solo puedo modificar propiedades existentes.
producto.nombre = "Monitor Curvo";
producto.precio = 600;
producto.disponible = false;

//Agregar un nuevo atributo al objeto
producto.inventario = 10

//Como eleminar un atributo 

delete producto.disponible;

console.table(producto);