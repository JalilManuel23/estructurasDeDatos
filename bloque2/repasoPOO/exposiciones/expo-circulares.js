class Nodo{
    constructor(valor, siguiente){
        this.valor = valor;
        this.siguiente = siguiente;
    }
}

class ListaCircular{
    constructor() {
        this.inicio = null;
        this.final = null;
    }

    insertarInicio(valor) {
        const nodoNuevo = new Nodo(valor, this.inicio);

        if(this.inicio == null) {
            this.inicio = nodoNuevo;
            this.final = nodoNuevo;
        }else{
            this.final.siguiente = nodoNuevo;
            this.inicio = nodoNuevo;
        }
    }

    insertaFinal(valor) {
        const nodoNuevo = new Nodo(valor, this.inicio);

        if(this.inicio == null) {
            this.inicio = nodoNuevo;
            this.final = nodoNuevo;
        }else{
            this.final.siguiente = nodoNuevo;
            this.final = nodoNuevo;
        }
    }

    recorrer() {
        let temporal = this.inicio;
        let resultado = '';

        while(temporal.valor != this.final.valor) {
            resultado += temporal.valor + " -> ";
            temporal = temporal.siguiente;
        }

        resultado += this.final.valor;

        return resultado;
    }
}

const lista =  new ListaCircular();
lista.insertarInicio("Luis");
lista.insertarInicio("Miguel");
lista.insertaFinal("Manuel");

console.log(lista.recorrer());