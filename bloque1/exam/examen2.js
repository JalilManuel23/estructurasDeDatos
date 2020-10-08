// 2.- Crear una solución en donde implementes una matriz de (3 X 3), en la cual te permita solo introducir
//      los numeros 1,2 o 3 con la finalidad de verificar que en sus 2 diagonales (IZQ y DER) y
//      sus lineas (vertical y horizontal ) los numeros sumen 6.
 
//      Es decir el programa solo deberá de permitir el ingreso de los números (1,2 o 3) para llenar
//      de izquierda a derecha la matriz, posteriormente comprobar las 4 convinaciones para verificar
//      si se lleno de forma correcta, en caso de que así sea,  immprimir con Consola y Alert lo siguiente:
     
//      a).- Matriz llenada
//      b).- "Gano el Juego" o "Sorry, vuelva a intentar"
 
let matriz=[[,,],[,,],[,,]];
let numero;
let entrar;
 
 
//Llenar la matriz con numeros R,C 
for(let r=0;r<3;r++)
{
    for(let c=0;c<3;c++)
    {
        entrar=true;
        do
        {
            numero=parseInt(prompt(`Ingrese un numero entero del 1 al 3 Solamente en la Matriz [${r}][${c}]`));
            if (numero>=1 && numero<=3)
            {
                matriz[r][c]=numero;
                entrar=false;
            }
        }while(entrar)
    }
}
 
for (const mat of matriz) {
    console.log(mat);
}
 
// Verificar las opciones
//Comprobar si el jugador gano en el juego
 
// if (matriz[0][0]==1 && matriz[0][1]==3 && matriz[0][2]==2 &&
//     matriz[1][0]==3 && matriz[1][1]==2 && matriz[1][2]==1 &&
//     matriz[2][0]==2 && matriz[2][1]==1 && matriz[2][2]==3)
//     {
//        console.log(`..:: Gano el Juego ::..`);
//        alert(`..:: Gano el Juego ::..`);
//     }
//  else
//     {
//         console.log(`..:: Sorry, vuelva a intentar ::..`);
//         alert(`..:: Sorry, vuelva a intentar ::..`);
//     }
 
suma1=matriz[1][0] + matriz[1][1] && matriz[1][2];
suma2=matriz[0][1] + matriz[1][1] && matriz[2][1];
suma3=matriz[0][0] + matriz[1][1] && matriz[2][2];
suma4=matriz[0][2] + matriz[1][1] && matriz[2][0];
 
if (suma1==6 && suma2==6 && suma3==6 && suma4==6)
{
    console.log(`..:: Gano el Juego ::..`);
    alert(`..:: Gano el Juego ::..`);
}
else
{
    console.log(`..:: Sorry, vuelva a intentar ::..`);
    alert(`..:: Sorry, vuelva a intentar ::..`);
}