//Código Listas Circulares

/*
    const nuevoNodo = {
        dato: 'perro',
        siguiente: 'apunte al mismo nodo que se está creando'
    } 
*/

class Nodo {
    constructor (valor,sig){
        this.valor = valor;
        this.enlaceSig = sig;
    }
}

class listaCircular{
    constructor (){
        this.inicio = null;
        this.fin = null;
    }

    insertarNodo(valor){
        const nodoNuevo = new Nodo(valor,this.inicio);
        
        if(this.inicio == null){
            this.inicio = nodoNuevo;
            this.fin = nodoNuevo;
        } else{
            this.fin.enlaceSig = nodoNuevo;
            this.fin = nodoNuevo;
        }
    }

    eliminarUltimoNodo() {
        if(this.inicio == null && this.fin == null) {
            return null;
        }

        let valorRegresar = this.fin.valor;

        if(this.inicio === this.fin) {
            this.inicio = null;
            this.fin = null;
        } else {
           this.fin.enlaceSig = null;
           this.temporal = this.inicio;

           while(this.temporal.enlaceSig.valor != this.fin.valor) {
                this.temporal = this.temporal.enlaceSig;
           }

           this.fin = this.temporal;
           this.fin.enlaceSig = this.inicio;
        }
        this.temporal = null;
        return valorRegresar;
    }

    imprimir() {
        let actual = this.inicio;
        let resultado = '';

        while(actual != this.fin) {
            resultado += actual.valor + " -> ";
            actual = actual.enlaceSig;
        }
        return resultado + this.fin.valor;
        // return resultado;
    }

    buscaryactualizar(objeto)
    {
        let respuesta;
        let valor;

        this.temporal=this.inicio;

        //recorrer la lista 
        while (this.temporal!=this.fin)
        {

           if (this.temporal.dato==objeto)
           {
             //lo encontro el dato 
             respuesta=prompt("Deseas modificar el valor del nodo (Si/No)");

             if (respuesta.toUpperCase()=="SI")
             {
                 valor=prompt("Ingresa el nuevo valor del nodo");
                 this.temporal.dato=valor;
             }
           }
        
            this.temporal=this.temporal.enlacesig;
        }

        if (this.temporal.dato==objeto)
           {
             //lo encontro el dato 
             respuesta=prompt("Deseas modificar el valor del nodo (Si/No)");

             if (respuesta.toUpperCase()=="SI")
             {
                 valor=prompt("Ingresa el nuevo valor del nodo");
                 this.temporal.dato=valor;
             }
           }
    }

    cuantosnodos()
    {
        let cantidadnodos=0;

        if (this.inicio==null && this.fin==null)
        cantidadnodos=0;
        else
           {
              this.temporal=this.inicio;

              while (this.temporal!=this.fin)
              {
                cantidadnodos++;
                  this.temporal=this.temporal.enlacesig;
              }
              cantidadnodos++;
              this.temporal=null;
           }

        return cantidadnodos;
    }

    insertarnodoalprincipio(dato)
    {                            
        const nodonuevo=new Nodo(dato,this.inicio);

        if (this.inicio==null) //lista esta vacia
        {
            this.inicio=nodonuevo;
            this.fin=nodonuevo;
        }
        else
        {
            this.fin.enlacesig=nodonuevo;
            this.inicio=nodonuevo;
        }  
    }
}

/*
Crear un objeto que se llame "apuntador" que tenga un puntero que se llame "Inicio", 
y que este la primera vez apunte a null
*/

const apuntador = new listaCircular();

/*
Crear un método en la clase listaCircular que permita crear un nodo que se llame 
"nodoNuevo" que reciba como parámetro un valor String y que se comporte el enlace 
siguiente como una Lista Circular 
*/

apuntador.insertarNodo("perro");
apuntador.insertarNodo("gato");
apuntador.insertarNodo("caballo");
apuntador.insertarNodo("s");
apuntador.insertarNodo("covid");