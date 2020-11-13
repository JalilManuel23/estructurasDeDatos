//Objeto -> Atributos (Propiedades) y Metodos (Acciones)
/*
 Dentro JS los objetos tienen un parecido a un JSON
 Dentro de los objetos se utiliza lo que es un
 Key (atributo) : value (valor o el dato)
 key:value
*/
//Objeto Computadora
const computadora2={
    marca:'Sony',
    modelo:'2005',
    tamanio_pantalla:14
  }
const mesa={
    material:'madera',
    ancho:100,
    alto:50,
    tipo:'centro'
} 
const computadora1={
  marca:'Dell',
  modelo:'2020',
  tamanio_pantalla:17
}
console.log(computadora1);
console.log(computadora1.marca);
console.log(computadora1['marca']);
for (const key in computadora1) {
  console.log(computadora1[key]);
}
//CRear e inicializar un objeto
const persona={
  nombre:'Daniel',
  apellidos:'Fernandez Mier',
  edad:45,
  hijos:['Daniel JR','Ximena','Alexa']
}
console.log(persona.hijos[1]);
for (const key in persona) {
  console.log(persona[key]);
}