//Comparacion y operadores estrictos


const numero1 = 20
const numero2 = "20"

//La condicional es estricta por el ===
if(numero1 === numero2){
    console.log("los numeros son iguales")
}else {
    console.log("los numeros son diferentes")
}

// Convierte alguna de las dos vaiables para compararla, no es tan estricta
if(numero1 == numero2){ 
    console.log("los numeros son iguales")
}else {
    console.log("los numeros son diferentes")
}