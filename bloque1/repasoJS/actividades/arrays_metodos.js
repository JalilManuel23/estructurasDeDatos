/*

propiedad 
  length  //devuelve el tamaño

metodos

  .isArray()  //devuelve true si el arreglo es un array

  Eliminar elementos
    .shift()  //elimina el primer elemento del arreglo y devuelve ese elemento
    .pop()  // elimina el ultimo elemento del arreglo y devuelve ese elemento

   Añadir elementos
     .unshift(elemento1,elemento2,...) //añade uno a más alementos al principio del arreglo 
                                       y devuelve la nueva longitud
  
     .push(elemento1,elemento2,...)  //añada uno a más alementos al final del arreglo 
                                       y devuelve la nueva longitud

   Buscar

     .indexOf()   //devuelve el primer indice del elemento que coincida con el valor especificado
                   o -1 si ninguno es encontrado

      .lastIndexOf()  //devuelve el ultimo indice del elemento que coincida con el valor especificado
                   o -1 si ninguno es encontrado 
                   
      
      
   Ordenar
   
    .sort()  //ordenar alfabeticamente de ascendentemente los elementos del arreglo

    .reverse()     //invierte el orden de los elementos del arreglo



*/
//declarar un arreglo

//declarar arreglo

// let numeros = [23, 45, 67, 89, 10, 45];

// for(let i = 0; i < numeros.length; i++)
//   console.log(numeros[i]);

// numeros.forEach(numero=>{
//   console.log(numero);
// });

// for(const numero of numeros){
//   console.log(numero);
// }

// //let soyarreglo = numeros.isArray();

// //console.log(soyarreglo);

// //Eliminar un elemento del arreglo

// let valoreliminado = numeros.pop();
// console.log(`Elemento eliminado ${valoreliminado}`);

// for(let i = 0; i < numeros.length; i++)
//   console.log(numeros[i]);

// let valoreliminado2 = numeros.shift();
// console.log(`Elemento eliminado ${valoreliminado2}`);

// for(let i = 0; i < numeros.length; i++)
//   console.log(numeros[i])

// //Añadir elementos al arreglo

// let tamanio1 = numeros.push(valoreliminado);
// console.log(tamanio1);

// for(let i = 0; i < numeros.length; i++)
//   console.log(numeros[i])

// let tamanio2 = numeros.unshift(valoreliminado2);
// console.log(tamanio2);

// for(let i = 0; i < numeros.length; i++)
//   console.log(numeros[i]);

// //Crear un programa que almacene los números de 10 en 10 en un vector de 10 posiciones. Eliminar uno a uno los números
// //del vector para guardarlos en otro vector

// //v1[10,20,30,40,50,60,70,80,90,100]

// let v1 = [];
// let con = 10;
// for(let i = 0; i < 10; i++){
//   v1[i] = con;
//   con+=10;
// }

// for(let i = 0; i < 10; i++){
// console.log(v1[i])
// }

// let v2 = [];

// for(let i = 0; i < 10; i++){
//   v2[i] = v1.pop();
// }

// for(let i = 0; i < 10; i++){
//   console.log(v2[i])
// }

// for(let i = 0; i < 10; i++){
//   console.log(v1[i])
// }

// //Buscar elementos
// let numeros3 = [23,45,67,89,10,45];

// let buscarElemento = 23;

// let posicionElementoEncontrado = numeros3.indexOf(buscarElemento);

// console.log(`La posición del elemento ${buscarElemento} es ${posicionElementoEncontrado}`);

//Crear un programa que busque un número y me cuente cuantas veces aparecio en el arreglo

let listaNumeros = [23,45,67,89,10,45];

let numero = 45;
let contador = 0;

for(let i = 0; i < listaNumeros.length; i++){
  if(numero === listaNumeros[i]){
    contador++;
  }
}

console.log(`El número ${numero} está ${contador} veces en el arreglo`);

//Ordenar el arreglo con la función sort e imprimir
// Ordenar un vector ascendentemente

// let numeros=[23,45,67,89,10,45];

// // imprimir los valores del arreglo 
// for (const numero of numeros) {
//   console.log(numero);
// }

// //ordenar el arreglo con la funcion sort e imprimir

// numeros.sort();
// for (const numero of numeros) {
//   console.log(numero);
// }