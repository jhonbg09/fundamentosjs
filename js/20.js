// Condicionales - Ternario

const autenticado = true;

autenticado ? console.log('Usuario Autenticado') : console.log('Usuario no Autenticado, Dirigir hacia el login');

//Doble ternario

const saldo = 600
const pagar = 700
const tarjeta = false

saldo > pagar ? 
console.log("Puedes pagar") : 
tarjeta ? 
console.log("Puedes pagar con tarjea") : console.log("No, no puede pagar con tarjeta")