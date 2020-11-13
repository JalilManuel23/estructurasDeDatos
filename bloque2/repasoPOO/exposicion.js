class Nodo{
    constructor(dato, siguiente, anterior){
        this.siguiente = siguiente;
        this.anterior = anterior;
        this.dato = dato;
    }
}

class ListaDoble{
    constructor(){
        this.inicio = null;
        this.final = null; 
    }

    //Agregar
    agregarInicio(dato){
        const nuevoNodo = new Nodo(dato, this.inicio, null);

        if(this.inicio){
            this.inicio.anterior = nuevoNodo;
            nuevoNodo.siguiente = this.inicio;
            this.inicio = nuevoNodo;
        }else{
            this.inicio = nuevoNodo;
            this.final = nuevoNodo;
        }
    }

    agregarFinal(dato){
        let nuevoNodo = new Nodo(dato, null, this.final);

        if(this.final){
            this.final.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.final;
            this.final = nuevoNodo;
        }else{
            this.inicio = nuevoNodo;
            this.final = nuevoNodo;
        }
    }

    //recorrer o imprimir
    recorrer(){
        let temporal = this.final;
        let resultado = '';

        while(temporal){
            resultado += temporal.dato + " <-> ";
            temporal = temporal.anterior;
        }
        return resultado;
    }
}

const lista = new ListaDoble();
lista.agregarInicio("Diego");
lista.agregarInicio("Juan");
lista.agregarInicio("Pedro");
lista.agregarFinal("Manuel");
console.log(lista.recorrer());