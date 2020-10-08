let matriz = [
    [], [], [],
    [], [], [],
    [], [], []
];

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        let numeroCorrecto = false;
        do{
            let numero = parseInt(prompt("Introduce un número del 1 al 3"));
        
            if(numero > 0 && numero < 4){
                matriz[i][j] = numero;
                numeroCorrecto = true;
            }
        }while(numeroCorrecto === false);
    }
}

let derecha = 0, izquierda = 0;
let horizonta = 0, vertical = 0;

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        if(i == j){
            derecha += matriz[i][j];
        }
        if((i == 2 && j == 0) || (i == 1 && j == 1) || (i == 0 && j == 2)){
            izquierda += matriz[i][j];
        }

        if(i == 1){
            horizonta += matriz[i][j];
        }

        if(j == 1){
            vertical += matriz[i][j];
        }
    }
}

alert("Matriz llenada");
if(derecha == 6 && izquierda == 6 && vertical == 6 && horizonta == 6){
    alert("Ganaste");
}else{
    alert("Sorry, vuelve a intntar");
}


console.log(matriz);