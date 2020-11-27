//Clase Nodo
class Nodo {
    //Método constructor de clase nodo
    constructor(dato, siguiente, anterior) {
        this.siguiente = siguiente;
        this.anterior = anterior;
        this.dato = dato;
    }
}

//Clase lista doble
class ListaDoble {
    constructor() {
        this.inicio = null;
        this.final = null;
        this.size = 0;
    }

    //Método de imprimir datos
    imprimir() {
        let nodoActual = this.inicio;
        let resultado = "";

        while (nodoActual) {
            resultado += nodoActual.dato + " <-> ";
            nodoActual = nodoActual.siguiente;
        }
        return resultado;
    }

    //Método de agregar datos
    agregarInicio(dato) {
        const nuevoNodo = new Nodo(dato, this.inicio, null);

        if (this.inicio) {
            this.inicio.anterior = nuevoNodo;
            nuevoNodo.siguiente = this.inicio;
            this.inicio = nuevoNodo;
        } else {
            this.inicio = nuevoNodo;
            this.final = nuevoNodo;
        }
        this.size++;
    }

    //Método de agregar al final
    agregarFinal(dato) {
        const nuevoNodo = new Nodo(dato, null, this.final);

        if (this.final) {
            this.final.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.final;
            this.final = nuevoNodo;
        } else {
            this.inicio = nuevoNodo;
            this.final = nuevoNodo;
        }
        this.size++;
    }

    //Método de eliminar al inicio
    eliminarInicio() {
        if (!this.inicio) {
            return null;
        }

        const valorRegresar = this.inicio.dato;

        if (this.inicio === this.final) {
            this.inicio = null;
            this.final = null;
        } else {
            this.inicio = this.inicio.siguiente;
            this.inicio.anterior = null;
        }
        this.size--;
        return valorRegresar;
    }

    //Método de eliminar al inicio
    eliminarFinal() {
        if (!this.final) {
            return null;
        }

        const valorRegresar = this.final.dato;

        if (this.inicio === this.final) {
            this.inicio = null;
            this.final = null;
        } else {
            this.final = this.final.anterior;
            this.final.siguiente = null;
        }
        this.size--;
        return valorRegresar;
    }

    //Método de agregar en una posición específica
    agregarEn(dato, lugar) {
        if (lugar < 0 || lugar > this.size) {
            return null;
        }

        const nuevoNodo = new Nodo(dato);
        let nodoActual = this.inicio;
        let nodoAnterior;
        if (lugar === 0) {
            nuevoNodo.siguiente = nodoActual;
            this.inicio = nuevoNodo;
        } else {
            for (let i = 0; i < lugar; i++) {
                nodoAnterior = nodoActual;
                nodoActual = nodoActual.siguiente;
            }
            nuevoNodo.siguiente = nodoActual;
            nodoAnterior.siguiente = nuevoNodo;
        }
        this.size++;
    }

    //Método de eliminar de una posición específica
    eliminarDe(lugar) {
        if (lugar < 0 || lugar > this.size) {
            return null;
        }

        let nodoActual = this.inicio;
        let nodoAnterior = null;

        if (lugar === 0) {
            this.inicio = nodoActual.siguiente;
        } else {
            for (let i = 0; i < lugar; i++) {
                nodoAnterior = nodoActual;
                nodoActual = nodoActual.siguiente;
            }
            nodoAnterior.siguiente = nodoActual.siguiente;
        }
        this.size--;
    }
}

//Prueba de funcionamiento
const lista_doble = new ListaDoble();
lista_doble.agregarInicio(12);
lista_doble.agregarFinal(57);
lista_doble.agregarFinal(95);
lista_doble.agregarEn(9, 1);
lista_doble.eliminarDe(1);

console.log(lista_doble.imprimir());