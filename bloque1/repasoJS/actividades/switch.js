// Estructura selectivaa
/*
    el tipo de dato de la variable a evaluar debe ser
    entero o cadena o caracter

    switch(variable){
        case valor1:
            instruccion;
        break;

        case valor2:
            instruccion;
        break;

        ....

        case valorn:
            instruccion;
        break;

        default:
            instruccion;
        break;
    }
*/

// Leer el valor de la edad de una persona e imprimir si es mayor de edad o no

// let edad = promt("Ingresa tu edad");

// switch (edad){
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//         console.log(`La persona es menor de edad porque tiene ${edad} años`); 
//     break;
//     default:
//         console.log(`La persona es mayor de edad porque tiene ${edad} años`); 
//     break;
// }

let dia = prompt("Ingresa el día de la semana");
dia = parseInt(dia);
switch(dia){
    case 1:
        alert("Soy domingo");
    break;
    case 2:
        alert("Soy lunes");
    break;
    case 3:
        alert("Soy martes");
    break;
    case 4:
        alert("Soy miercoles");
    break;
    case 5:
        alert("Soy jueves");
    break;
    case 6:
        alert("Soy viernes");
    break;
    case 7:
        alert("Soy sabado");
    break;
    default:
        alert("Ninguna opción seleccionada");
    break;
}