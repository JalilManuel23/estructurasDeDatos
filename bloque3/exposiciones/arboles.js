class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.derecha =  null;
        this.izquierda = null;
    }
}

class Arbol {
    constructor() {
        this.raiz = null;
    }

    agregarNodo(valor) {

        const nodoNuevo = new Nodo(valor);

        if(this.raiz === null) {
            this.raiz = nodoNuevo;
        }else {
            let temporal = this.raiz;

            while(temporal != null) {
                if(valor < temporal.valor) {
                    if(temporal.izquierda === null) {                  
                        temporal.izquierda = nodoNuevo;
                        break;
                    }else {
                        temporal = temporal.izquierda;
                    }
                }else {
                    if(temporal.derecha === null) {
                        temporal.derecha = nodoNuevo;
                        break;
                    }else {
                        temporal = temporal.derecha;
                    }
                }
            }
        }
    }
}

const arbol = new Arbol();
arbol.agregarNodo(2);
arbol.agregarNodo(1);
arbol.agregarNodo(3);

console.log(arbol);