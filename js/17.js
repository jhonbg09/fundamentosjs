//Condicionales

const disponible = 4000
const retirar = 20000

if(disponible > retirar){
    // se cumple la condicion y se ejecuta el codigo
    console.log( disponible - retirar )
} else {
    //No cumple la condicion
    console.log("Fondos insuficientes")
}
