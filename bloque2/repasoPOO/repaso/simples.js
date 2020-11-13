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

    agregarInicio(valor) {
        const nodoNuevo = new Nodo(valor, this.inicio);

        if(this.inicio == null && this.final == null) {
            this.inicio = nodoNuevo;
            this.final = nodoNuevo;
        } else {
            this.inicio = nodoNuevo;
        }
    }

    agregarFinal(valor) {
        const nodoNuevo = new Nodo(valor, null);

        if(this.inicio == null && this.final == null) {
            this.inicio = nodoNuevo;
            this.final = nodoNuevo;
        } else {
            this.final.siguiente = nodoNuevo;
            this.final = nodoNuevo;
        }
    }

    agregarEn(valor, posicion) {
        const nodoNuevo = new Nodo(valor, this.inicio);

        let temporal = this.inicio;
        let anterior = null;

        if(posicion === 0) {
            this.inicio = nodoNuevo;
        } else {
            for(let i = 0; i < posicion; i++) {
                anterior = temporal;
                temporal = temporal.siguiente; 
            }
            nodoNuevo.siguiente = temporal;
            anterior.siguiente = nodoNuevo;
        }
    }

    eliminarInicio() {
        if(this.inicio == this.final) {
            this.inicio = null;
            this.final = null;
        } else {
            let temporal = this.inicio.siguiente;
            this.inicio.siguiente = null;
            this.inicio = temporal;
            temporal = null;
        }
    }

    eliminarFinal() {
        if(this.inicio == this.final) {
            this.inicio = null;
            this.final = null;
        } else {
            let temporal = this.inicio;

            while(temporal.siguiente != this.final) {
                temporal = temporal.siguiente;
            }
            temporal.siguiente = null;
            this.final = temporal;
            // temporal = null;
        }
    }

    eliminarEn(posicion) {
        if(posicion == 0) {
            this.inicio = null;
            this.final = null;
        } else {
            let temporal = this.inicio;
            let anterior;   
            for(let i = 0; i < posicion; i++) {
                anterior = temporal;
                temporal = temporal.siguiente;
            }
            anterior.siguiente = temporal.siguiente;
            temporal.siguiente = null;
            temporal = null;
        }
    }

    contar() {
        let temporal = this.inicio;
        let contador = 0;

        if(this.inicio == null && this.final == null) {
            contador = 0;
        } else {
            while(temporal) {
                temporal = temporal.siguiente;
                contador++;     
            }
        }

        return contador;
    }

    imprimir() {
        let temporal = this.inicio;
        let resultado = '';

        while(temporal) {
            resultado += temporal.valor + " -> ";
            temporal = temporal.siguiente;
        }

        return resultado;
    }

    buscar(datoBuscado) {
        let temporal = this.inicio;
        let resultado = false;

        while(temporal) {
            if(temporal.valor === datoBuscado) {
                console.log("Dato encotrado");
                resultado = true;
            }
            temporal = temporal.siguiente;
        }

        return resultado;
    }
}

const lista = new ListaSimple();

lista.agregarInicio("2");
lista.agregarInicio("1");
lista.agregarFinal("3");
lista.agregarFinal("4");
lista.agregarEn("5", 1);

// lista.eliminarInicio();
// lista.eliminarInicio();
// lista.eliminarFinal();
// lista.eliminarFinal();
// lista.eliminarFinal();
// lista.eliminarEn(1);

console.log(lista.buscar("4"));

console.log(lista.imprimir());
console.log(lista.contar());