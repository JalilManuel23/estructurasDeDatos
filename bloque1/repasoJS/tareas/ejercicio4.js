let numero = parseInt(prompt("Ingresa un número entero positivo"));
let resultado = "";

for(let i = numero; i > 0; i--){
    resultado += i;
    if(i != 1){
        resultado += ", ";
    }
}

alert(resultado);