let vector1 = [];
let numero;

//Ingresar solo números enteros positivos un vector de 5 posiciones
let n = 0;
do{
    numero = parseInt(prompt("Ingrese un número entero positivo"));

    if(numero >= 0){
        vector1[n] = numero;
        n++;
    }
}while(n < 5);

let vector2 = [];
for(let i = 0; i < 5; i++){ //Pasar los numeros del vector 1 al vector 2
    vector2 [i] = vector1[i];
}

console.log(vector1);

//método de ordenamiento burbuja
for(let j = 1; j <= 5; j++){
    for(let i = 0; i < 5; i++){
        if(vector2[i] > vector2[i+1]){
            let tempo = vector2[i];
            vector2[i] = vector2[i + 1];
            vector2[i + 1] = tempo;         
        }
    }
}

console.log(vector2);

//otro vector con el resultado de multiplicar el número del vector por 2
let vector3 = [];
for(let i = 0; i < 5; i++){ 
    vector3 [i] = vector1[i] * 2;
}

console.log(vector3);

numero = parseInt(prompt("Ingrese un número"));

for(let i = 0; i < 5; i++){
    if(vector1[i] === numero){
        console.log(`El número ${numero} lo encontré en el vector1`);
    }
    if(vector2[i] === numero){
        console.log(`El número ${numero} lo encontré en el vector2`);
    }
    if(vector3[i] === numero){
        console.log(`El número ${numero} lo encontré en el vector3`);
    }
}

vector1.push(numero);
vector2.push(numero);
vector3.push(numero);