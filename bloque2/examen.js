class Nodo {
    constructor(valor, siguiente) {
        this.valor = valor;
        this.siguiente = siguiente;
    }
}

class ListaSimple {
    constructor() {
        this.inicio = null;
        this.final = null;
    }

    agregar(valor) {
        const nodoNuevo = new Nodo(valor, null);

        if(this.inicio == null && this.final == null) {
            this.inicio = nodoNuevo;
            this.final = nodoNuevo;
        } else {
            this.final.siguiente = nodoNuevo;
            this.final = nodoNuevo;
        }
    }

    buscar() {
        let temporal = this.inicio;
        let contador = 0;

        let datoBuscado = prompt("Introduce el número a buscar");

        while(temporal) {
            if(temporal.valor === datoBuscado) {
                console.log("Dato encotrado");
                contador++;
            }
            temporal = temporal.siguiente;
        }

        if(contador > 1) {
            return `El dato ${datoBuscado} está ${contador} veces en la lista`;
        } else {
            if(contador == 1) {
                return `El dato ${datoBuscado} está ${contador} vez en la lista`;
            } else {
                if(contador == 0) {
                    return `El dato ${datoBuscado} no está en la lista`;
                }
            }
        }

    }
}

const lista = new ListaSimple();

lista.agregar("5");
lista.agregar("4");
lista.agregar("10");
lista.agregar("-1");
lista.agregar("5");

alert(lista.buscar());
