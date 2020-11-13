class Nodo {
    constructor(valor, siguiente){
        this.valor = valor;
        this.siguiente = siguiente;
    }
}

class ListaCircular {
    constructor() {
        this.inicio = null;
        this.final = null;
    }

    agregarInicio(valor) {
        const nodoNuevo = new Nodo(valor, this.inicio);

        if(this.inicio == null && this.final ==  null) {
            this.inicio = nodoNuevo;
            this.final = nodoNuevo;
        } else {
            this.final.siguiente = nodoNuevo;
            this.inicio = nodoNuevo;
        }
    }

    agregarFinal(valor) {
        const nodoNuevo = new Nodo(valor, this.inicio);
 
        if(this.inicio == null && this.final ==  null) {
            this.inicio = nodoNuevo;
            this.final = nodoNuevo;
        } else {
            this.final.siguiente = nodoNuevo;
            this.final = nodoNuevo;
        }
    }

    agregarEn(valor, posicion) {
        const nodoNuevo = new Nodo(valor, this.inicio);

        if(this.inicio == null) {
            this.inicio = nodoNuevo;
            this.final = nodoNuevo;
        }

        if(posicion == 0) {
            this.inicio = nodoNuevo;
            this.final.siguiente = nodoNuevo;
        } else {
            let actual = this.inicio;
            let anterior = null;

            for(let i = 0; i < posicion; i++) {
                anterior = actual;
                actual = actual.siguiente;
            }

            nodoNuevo.siguiente = actual;
            anterior.siguiente = nodoNuevo;
        }
    }

    eliminarInicio() {
        if(this.inicio == this.final) {
            this.inicio = null;
            this.final = null;
        } else {
            let temporal = this.inicio;
            // this.inicio.siguiente = null;
            this.inicio = temporal.siguiente;
            this.final.siguiente = this.inicio;
            // temporal = null;
        }
    }

    eliminarFinal() {
        if(this.inicio == this.final) {
            this.inicio = null;
            this.final = null;
        } else {
            let temporal = this.inicio;
            let anterior = null;

            while(temporal != this.final) {
                anterior = temporal;
                temporal = temporal.siguiente;
            }

            this.final.siguiente = null;
            this.final = anterior;
            this.final.siguiente = this.inicio;
        }
    }

    imprimir() {
        let actual = this.inicio;
        let resultado = '';

        while(actual != this.final) {
            resultado += actual.valor + " -> ";
            actual = actual.siguiente;
        }
        return resultado + this.final.valor;
        // return resultado;
    }
}

const circular = new ListaCircular();

circular.agregarInicio("1");
circular.agregarInicio("2");
circular.agregarFinal("3");
circular.agregarFinal("2");
circular.agregarInicio("8");
circular.agregarEn("w", 0);
circular.agregarEn("2", 0);
circular.agregarEn("r", 1);

// circular.eliminarInicio();
// circular.eliminarInicio();
// circular.eliminarFinal();
// circular.eliminarFinal();

console.log(circular.imprimir());