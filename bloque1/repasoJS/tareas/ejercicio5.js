let numero = parseInt(prompt("Ingresa un número"));

let i = numero, resultado = 1;

while(i > 0){
    resultado *= i;
    i--;
}

alert(resultado);