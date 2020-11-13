class Nodo{
    constructor(dato, siguiente){
        this.dato = dato;
        this.siguiente = siguiente;
    }
}

class Lista{
    constructor(){
        this.size = 0;
        this.inicio = null;
    }

    //Agregar 
    agregar(dato){
        const nuevoNodo = new Nodo(dato, null);

        if(!this.inicio){
            this.inicio = nuevoNodo;
        }else{
            let valorActual = this.inicio;

            while(valorActual.siguiente){
                valorActual = valorActual.siguiente;
            }

            valorActual.siguiente = nuevoNodo;
        }
        this.size++;
    }

    //Eliminar
    eliminar(dato){
        let valorActual = this.inicio;
        let anterior = null;

        while(valorActual != null){
            if(valorActual.dato === dato){
                if(!anterior){
                    this.inicio = valorActual.siguiente;
                }else{
                    anterior.siguiente = valorActual.siguiente;
                }
                this.size--;
                return valorActual.dato;
            }
            anterior = valorActual;
            valorActual = valorActual.siguiente;
        }
        return null;
    }
}

let lista = new Lista();
console.log(lista);
lista.agregar(2);
console.log(lista);
lista.agregar(45);
console.log(lista);
lista.eliminar(45);
console.log(lista);