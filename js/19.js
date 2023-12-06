//Condicionales condicion || y &&

const saldo = 600
const pagar = 500
const tarjeta = false

if(saldo > pagar || tarjeta){
    console.log("Puedes pagar")
} else {
    console.log("No, no Puedes Pagar")
}