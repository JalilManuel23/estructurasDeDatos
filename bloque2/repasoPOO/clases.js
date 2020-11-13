//Clases en JS
/*
Clases se realizan con el paradigma de programacion en Orientado a Objetos
 
Objetos > Atributos (Propiedades) y Métodos (Acciones)
 
Dentro de las clases en JS por regular se coloca lo siguiente:
 
>Metodos
>Contructuctor (Metodo que inicializa con valores a un objeto o instancia)
 
const persona={
  nombre:'Daniel',
  apellidos:'Fernandez Mier',
  edad:45
 
}
 
*/
 
 
 
class Personas
{
    constructor(nombre,apellidos,edad){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.edad=edad;
    }
 
    dormir(){
      console.log(`Listo ya estoy dormido`);
    }
 
    hablar(mensaje){
      return `El mensaje que voy a decir es: ${mensaje}`;
    }
 
    caminar(tiempo){
       console.log(`El tiempo que camino la persona es: ${tiempo} minutos`);
    }
 
}
 
//crear un objeto o instanciarlo
 
const persona2=new Personas("Roberto","Ramirez Hernandez",23);
 
console.log(persona2);
 
console.log(`El nombre de la persona es: ${persona2.nombre+" "+persona2.apellidos}`);
 
//mandar llamar metodos
 
persona2.dormir();
 
console.log(persona2.hablar("Hola hay una serpiente en mi bota"));
 
persona2.caminar(60);