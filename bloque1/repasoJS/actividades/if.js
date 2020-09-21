// Condiciones

/*
Simple
if (condición)
    {
        instrucción1;
        instrucciónN;
    }

    Compuesto o estructurado

    if (condición)
    {
        instrucción1;
        instrucciónN;
    }
    else
    {
        instrucción1;
        instrucciónN;
    }

Anidado

if (condición)
    {
       if (condición) 
        {
        instrucción1;
        instrucciónN;
    }

if y else if

 if (condición) 
        {
        instrucción1;
        instrucciónN;
    }
     else if (condición) 
        {
        instrucción1;
        instrucciónN;
    }

     else if (condición) 
        {
        instrucción1;
        instrucciónN;
    }

     else(condición) 
        {
        instrucción1;
        instrucciónN;
    }

*/

//Imprimir en pantalla si una persona es mayor de edad
/* let edad;

//Introducir por el teclado
edad=prompt('Dame tu edad '); 

if (edad>=34 && edad<100)
   // console.log (`La persona es mayor de edad por que tienen ${edad} años`);
    alert(`La persona es mayor de edad por que tienen ${edad} años`)
    else
    //console.log(`La persona es menor de edad por que tienen ${edad} años`);
    alert(`La persona es menor de edad por que tienen ${edad} años`)

    //Que imprima los dias de la semana con base a un numero

 */

/*  let dia;

 dia=prompt('Indica el dia de la semana (1-7)');

 if (dia>=1 && dia<=7)
 {
     alert('dia de la semana correcto');
 }
 else
    alert('Por favor ingrese un día de la semana correcto'); */

    let dia;

    dia = prompt('Indica el dia de la semana (1 al 7)');
    
    if (dia>=1 && dia<=7)
    {
    
    if (dia == 1) {
        alert('Soy domingo');
    }
    else if (dia == 2) {
        alert('Soy lunes');
    }
    else if (dia == 3) {
        alert('Soy martes');
    }
    else if (dia == 4) {
        alert('Soy miércoles');
    }
    else if (dia = 5) {
        alert('Soy jueves');
    }
    else if (dia = 6) {
        alert('Soy viernes');
    }
    else if (dia = 7) {
        alert('Soy sábado');
    }
    else
        alert('Por favor ingrese un día de la semana correcto');
    }
    