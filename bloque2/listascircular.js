//Codigo Lista circular 

//Crear un nodo que se llame nuevonodo que contenga los siguientes elementos = dato:"perro", 
//Siguiente:(apunte al mismo nodo que se esta creando)

// const nuevonodo = 
// {
//     dato:'perro',
//     siguiente:'apunte al mismo nodo que se esta creando'
// }

//  let inicio = null; 

 class Nodo
 {
     constructor(valor,sig)
     {
      this.valor =valor;
      this.enlacesig=sig;   
     }
 }

 class ListaCircular 
 {
    constructor()
    {
        this.inicio= null;
        this.fin = null;
    }     

    insertarnodo(valor)
    {
        const nodonuevo = new Nodo(valor,this.inicio);
        
        if(this.inicio == null ) // mi lista esta vacia
        {
            this.inicio = nodonuevo;
            this.fin = nodonuevo;
        }
        else
        {
            this.fin.enlacesig=nodonuevo;
            this.fin= nodonuevo;
        }
        
    }

 }

//Crear un apuntador que se llame "inicio", que la primera vez apunte a null 

 const apuntador = new ListaCircular();

//Crear un metodo en la clase ListaCircular que permita crear nodos que se llame "nodonuevo" que reciba
//como parametro un valor String y que se comporte el enlace siguiente como una lista circular 

apuntador.insertarnodo("perro");

console.log(apuntador);

apuntador.insertarnodo("gato");

console.log(apuntador);

apuntador.insertarnodo("caballo");

console.log(apuntador);


//Crear un nodo que se llame nuevonodo que contenga los siguientes elementos: dato="perro",
//siguiente: (apunte al mismo nodo que se esta creando)



