// 1.- Crear un programa que simule una nota de venta en la cual, se vaya guardando el precio unitario (PU),
// cantidad de articulos comprados (cant), apartir de esto se almacene en un tercer arreglo el
// precio neto (PN) que se calcula con la siguiente formula: PN=PU*CANT. Lo anterior se debe de solicitar
// y calcular de forma indeterminada mientras el usuario compre algun articulo.
 
// Al final el programa debera de imprimir:
// a).- El detalle de los productos comprados (Cannt, PU, PN )
// b).- El Subtotal a pagar (sumatoria de los PN), IVA 16% sobre el Subtotal,
//      y el Total a Pagar (Subtotal+IVA)
 
// Cantidad   Descripcion  Precio Unitario(PU)    Precio Neto(PN)
//  6         Chupachips     23                     138
//  2         Chipschupa     100                    200
//  1         CokeDiet       50                      50
//                                   Sub-total      388
//                                   IVA (16%)       62
//                                   Total Pagar    450
 
 
let cant=[],pu=[],pn=[];
let subtotal=0,total_pagar=0,i=0,iva=0;
let opcion;
 
do
{
    cant[i]=parseInt(prompt("Cantidad de productos: "));
    pu[i]=parseFloat(prompt("Precio Unitario: "));
    pn[i]=cant[i]*pu[i];
 
    subtotal=subtotal+pn[i];
   
    opcion=prompt("¿Deseaa comprar otro producto (S/N)?");
    opcion=opcion.toUpperCase();
    i++;
 
   
 
}while (opcion=='S');
 
iva=subtotal*0.16;
total_pagar=subtotal+iva;
 
console.log(`Cantidad  - - -  Precio Unitario  - - -  Precio Neto  `);
 
let letrero1="",letrero2="",letrero3="";
 
letrero1="Cantidad  - - -  Precio Unitario  - - -  Precio Neto \n ";
 
for(let i=0;i<cant.length;i++)
{
  console.log(`     ${cant[i]}      - - -      ${pu[i]}        - - -     ${pn[i]}  `);
  letrero2=letrero2+`     ${cant[i]}      - - -      ${pu[i]}        - - -     ${pn[i]} \n `;
}
 
console.log(`                                   Subtotal  ${subtotal}
             \n                                 IVA (16%) ${iva}
             \n                                 Total Pagar ${total_pagar}`);
 
letrero3=letrero1+letrero2+`                                   Subtotal  ${subtotal}
                           \n                                 IVA (16%) ${iva}
                           \n                                 Total Pagar ${total_pagar}`;
 
alert(letrero3);