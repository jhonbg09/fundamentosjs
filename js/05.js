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
// Object.seal(producto) on esta propiedad si medeja modificar las propiedades pero no me deja crearlas ni eliminarlas 
//Solo puedo odificar propiedades existentes.
producto.nombre = "Monitor Curvo";
producto.precio = 600;
producto.disponible = false;

//Agregar un nuevo atributo al objeto
producto.inventario = 10

//Como eleminar un atributo 

delete producto.disponible;

console.table(producto);