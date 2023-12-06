//  Funciones - Function declaration

function sumar() {
    console.log( 2 + 2);
}

function sumaDos(a, b) {
    console.log( a + b);
}

function sumaTres(a = 0, b = 0) {
    return a + b; //siempre que usamos esl return dentro de la funcion debemos guardar los parametros dentro de una variable 
}

sumar();
sumaDos(5, 5)
const resultado = sumaTres(100, 200); //asi se debe realizar con el return
console.log(resultado);