let pares = [];
let nones = [];
let conPares = 0, conNones = 0;

for(let i = 0; i < 10; i++){
    let numero = parseInt(prompt("Ingresa un número"));

    if(numero % 2 == 0){
        pares[conPares] = numero;
        conPares++;
    }else{
        nones[conNones] = numero;
        conNones++;
    }
}

console.log("Números Pares:");
for(numeroPar of pares){
    console.log(numeroPar);
}

console.log("Números Nones:");
for(numeroNon of nones){
    console.log(numeroNon);
}