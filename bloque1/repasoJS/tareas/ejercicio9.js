let matriz1 = [[,],[,]];
let matriz2 = [[,],[,]];

for(let i = 0; i < 2; i++){
    for(let j = 0; j < 2; j++){
        matriz1[i][j] = parseInt(prompt(`Ingrese el valor en la posición: (${i},${j}) de la matriz 1`));
        matriz2[i][j] = parseInt(prompt(`Ingrese el valor en la posición: (${i},${j}) de la matriz 2`));
    }
}

let vectorSuma = [];
for(let i = 0; i < 2; i++){
    for(let j = 0; j < 2; j++){
        vectorSuma.push(matriz1[i][j] + matriz2[i][j]);
    }
}

let contadorVectorSuma = 0;
for(let i = 0; i < 2; i++){
    for(let j = 0; j < 2; j++){
        console.log(`${matriz1[i][j]} + ${matriz2[i][j]} = ${vectorSuma[contadorVectorSuma]}`);
        contadorVectorSuma++;
    }
}