// Trabajar con String
 
 
let nombre="Dagoberto";
let universidad="UTD";
let carrera="TI";
 
//Operaciones y funciones de la clase String
 
//longitud de una cadena
 
let tamanio_nombre=nombre.length;
console.log(`El numero de caracteres de la variable 'nombre' es: ${tamanio_nombre}` );
 
//Convertir a Mayusculas
 
console.log(`El valor de nombre es ${nombre}`);
nombre=nombre.toUpperCase();
console.log(`El valor de nombre es ${nombre}`);
 
//Remplazar una cadena por otra
console.log(`El valor de universidad es ${universidad}`);
 
universidad=universidad.replace('UTD','Universidad Tecnologica de Durango');
console.log(`El valor de universidad es ${universidad}`);
 
//Extraer una cadena de otra
let cadenanew=universidad.substr(0,11);
console.log(`El valor de cadenanew es ${cadenanew}`);

//Repetir una cadena 5 veces
console.log(`El valor de la cadena 'carrera' es ${carrera}`);

carrera=carrera.repeat(5);
console.log(`El valor de la cadena 'carrera' es ${carrera}`);

//Eliminar espacios dentro de una cadena
let frase ="   El otro dia     me cai del columpio     ";

console.log(`El contenido de la variable 'frase' es: ${frase}`);

frase=frase.trim();

console.log(`El contenido de la variable 'frase' es: ${frase}`);