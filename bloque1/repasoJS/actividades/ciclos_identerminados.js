//   1.- Instrucciones de de bloque de repetición (bucles) 
//   2.- Indeterminadas por que en algunas ocasiones no conocemos hasta cuando sera el final del ciclo
//   3.- Aceptan cualquier tipo de dato dentro de la condicion 
//   4.- Los elementos son: condicion, valor inicial y valor final

//   while (condicion)
//   {
//       instruccion1;
//       ...
//       instruccionN;
//   }

//   do 
//   {
//       instruccion1;
//       ...
//       instruccionN;
//   }while (condicion);


let i=1;

while (i<=5)
{
    console.log(`@`);
    i++;
}

let i=1;

do
{
    console.log(`@`);
    i++;
}while (i<=5)
  

let i;
i=prompt("Quieres imprimir el @ (Si/No)");

while (i=="si")
{
    console.log(`@`);
    i=prompt("Quieres imprimir el @ (Si/No)");
}


let i;


do
{
    console.log(`@`);
    i=prompt("Quieres imprimir el @ (Si/No)");
}while (i=="si")