//ejemplos con Arreglos

/*

 1.- Son estructuras que nos permiten almacenar varios datos y agruparlos
 2.- En JS los array se pudene llenar con cualquier tipo de dato y deben de ir separados 
     por comas.
 3.- En JS se pudene mezclar tipos de datos pero NO es recomendable 
 4.- Se declaran con llaves cuadrados
 5.- Puden establecer vacios o con algun contenido 
 6.- Pueden añadise o eliminarse en el momento que se desee

 let array1=[]; // declarar un arreglo vector vacio

 let array2=[1,2,3,4];  //declarar e inicializar un arreglo vector con 4 datos numericos 

 //matrices
 //declarar e inicializar una matriz de 2*2 
 var matriz = [
               [1, 2],
               [4, 5]
              ];

*/
//declarar e inicializar una matriz de 3*3 
/*var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
   ];

   const vector2=new Array[];

*/
//declarar un arreglo

/*

let vector1=[]; // declarar un arreglo vector vacio
 const vector2=new Array[]; // declarar un arreglo vector vacio



 let array2=[ 1,2,3,4];  //declarar e inicializar un arreglo vector con 4 datos numericos
 const vector2=new Array[1,2,3,4]; 
 array2[0]=1;
 array2[1]=2;
 array2[2]=3;
 array2[3]=4;


 //matrices
 //declarar e inicializar una matriz de 2*2 
  let matriz[];
  matriz[0,0]=1;
  matriz[0,1]=2;
  matriz[1,0]=3;
  matriz[1,1]=4;
  

  //Renglon, Columna
 let matriz = [
               [1, 2],
               [4, 5]
              ];



//declarar e inicializar una matriz de 3*3 
let matriz2 = [
               [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]
              ];
  matriz2[0,0]=1;
  matriz2[0,1]=2;
  matriz2[0,2]=3;
  matriz2[1,0]=4;
  matriz2[1,1]=5;
  matriz2[1,2]=6;
  matriz2[2,0]=7;
  matriz2[2,1]=8;
  matriz2[2,2]=9;

  const vector2=new Array[];
*/

// let numeros = (1, 2, 3, 4, 5);

// for (const numero of numeros) {
//     console.log(numero);
// }

// for (let i=0;i<5;i++) 
//     console.log(numero);

// numeros.forEach(numero=> {
//     console.log(numero);
// });


// let numeros2=[];

// for (let i=0;i<10;i++) {
//     numero2[i]="a";
// }

// for (let i=0;i<10;i++) {
//     console.log(numero2[i]);
// }

// for (const numero2 of numeros2) {
//     console.log(numero2);
// }


//Arreglos de matrices

// let matriz = [
//     [1, 0],
//     [0, 1]
// ];

// //R; C

// for (let r=0;r<2;r++) {
//     for (let c=0;c<2;c++) {
//         console.log(matriz);
//     }
// }


//Crear un arreglo de tipo matriz de 3*3, llenar la matriz con la diagonal
//superior izquierda con 1, y el resto con 0.
//Al final imprimir el contenido de la matriz.

let matriz2 = [
    [ , , ],
    [ , , ],
    [ , , ]
];

for (let i=0; i<3; i++) {
    for (let r=0; r<3; r++) {
        if (i==r) {
            matriz2[r][c]=1;
        } else {
            matriz2[r][c]=0;
        }   
    }
}

for (let r=0;r<3;r++) {
    for(let c=0;c<3;c++) {
        console.log(matriz2[r][c]);
    }
}
