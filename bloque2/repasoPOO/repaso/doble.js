class Nodo {
    constructor(valor, siguiente, anterior) {
        this.valor = valor;
        this.siguiente = siguiente;
        this.anterior = anterior;
    }
}

class ListaDoble {
    constructor() {
        this.inicio = null;
        this.final = null;
    }

    agregarInicio(valor) {
        const nodoNuevo = new Nodo(valor, this.inicio, null);

        if(this.inicio == null && this.final == null) {
            this.inicio = nodoNuevo;
            this.final = nodoNuevo;
        } else {
            this.inicio.anterior = nodoNuevo;
            this.inicio = nodoNuevo;
        }
    }

    agregarFinal(valor) {
        const nodoNuevo = new Nodo(valor, null, this.final);

        if(this.inicio == null && this.final == null) {
            this.inicio = nodoNuevo;
            this.final = nodoNuevo;
        } else {
            this.final.siguiente = nodoNuevo;
            this.final = nodoNuevo;
        }
    }

    agregarEn(valor, posicion) {
        const nodoNuevo = new Nodo(valor, null, null);

        if(posicion == 0) {
            nodoNuevo.siguiente = this.inicio;
            this.inicio.anterior = nodoNuevo;
            this.inicio = nodoNuevo;
        } else {
            let temporal = this.inicio;
            let anterior = null;

            for(let i = 0; i < posicion; i++) {
                anterior = temporal;
                temporal = temporal.siguiente;
            }
            nodoNuevo.siguiente = temporal;
            nodoNuevo.anterior = anterior;
            anterior.siguiente = nodoNuevo;
        }
    }

    eliminarInicio() {
        if(this.inicio == null && this.final == null) {
            return null;
        } else {
            let temporal = this.inicio;
            this.inicio = this.inicio.siguiente;
            temporal.siguiente = null;
            this.inicio.anterior = null;
            temporal = null;
        }
    }

    eliminarFinal() {
        if(this.inicio == null && this.final == null) {
            return null;
        } else {
            let temporal = this.final.anterior;
            this.final.anterior = null;
            this.final = temporal;
            this.final.siguiente = null;
            temporal = null;
        }
    }

    eliminarEn(posicion) {
        if(posicion == 0) {
            this.inicio = this.inicio.siguiente;
            this.inicio.anterior = null;
        } else {
            let temporal = this.inicio;
            let anterior = null;

            for(let i = 0; i < posicion; i++) {
                anterior = temporal;
                temporal = temporal.siguiente;
            }

            anterior.siguiente = temporal.siguiente;
            temporal.siguiente.anterior = anterior;
            temporal.siguiente = null;
            temporal.anterior = null;
            temporal = null;
        }
    }

    contar() {
        let temporal = this.inicio;
        let contador = 0;

        while(temporal) {
            contador++;
            temporal = temporal.siguiente;
        }

        return contador;
    }

    imprimir() {
        let temporal = this.inicio;
        let resultado = '';

        while(temporal) {
            resultado += temporal.valor + " <-> ";
            temporal = temporal.siguiente;
        }

        return resultado;
    }
}

const listaDoble = new ListaDoble;

listaDoble.agregarInicio("1");
listaDoble.agregarInicio("2");
listaDoble.agregarInicio("3");
listaDoble.agregarInicio("4");
listaDoble.agregarInicio("5");
listaDoble.agregarFinal("46");
listaDoble.agregarFinal("34");
listaDoble.agregarFinal("5");
// listaDoble.agregarEn("7", 2);
listaDoble.agregarInicio("2");

// listaDoble.eliminarInicio();
// listaDoble.eliminarInicio();
// listaDoble.eliminarFinal();
// listaDoble.eliminarFinal();
// listaDoble.eliminarEn(0);
listaDoble.eliminarEn(7);
// listaDoble.eliminarEn(1);

console.log(listaDoble.imprimir());
console.log(listaDoble.contar());