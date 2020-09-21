let numeros = [];
for(let i = 0; i < 3; i++){
    numeros[i] = parseInt(prompt("Ingresa un número entero positivo"));
}

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        if(numeros[i] < numeros[j]){
            let temp = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = temp;
        }
    }
}

alert(numeros);