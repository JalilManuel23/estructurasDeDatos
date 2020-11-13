// Operacion de: Crear el nodo (dato o valor , enlace )

class Nodo {
    constructor(valor, enlace) {
        this.dato = valor;
        this.siguiente = enlace;
    }
}


class ListaCircularSimple {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    //agregar un nodo al final de la lista
    insertarnodo(valor) {
        const nuevonodo = new Nodo(valor); //crear o instancias un objeto llamado nuevonodo de tipo nodo

        if (this.primero == null) { //no hay nodos en la lista o que esta vacia
            this.primero = nuevonodo;
            this.ultimo = nuevonodo;
            this.ultimo.siguiente = this.primero;
        } else {
            this.ultimo.siguiente = nuevonodo;
            nuevonodo.siguiente = this.primero;
            this.ultimo = nuevonodo;
        }
    } 
}

const nodo = new ListaCircularSimple();

nodo.insertarnodo(3);

//console.log(nodo);

nodo.insertarnodo(4);
nodo.insertarnodo(5);
nodo.insertarnodo(6);

console.log(nodo);

