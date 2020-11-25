class Nodo {
    constructor(dato, siguiente) {
        this.dato = dato;
        this.siguiente = siguiente;
    }
}

class Lista {
    constructor() {
        this.inicio = null;
        this.fin = null;
    }

    insertar(valor) {
        const nuevoNodo = new Nodo(valor, null);

        if(this.inicio == null && this.fin == null) {
            this.inicio = nuevoNodo;
            this.fin = nuevoNodo;
        } else {
            this.fin.siguiente = nuevoNodo;
            this.fin = nuevoNodo;
            this.fin.siguiente = null;
        }
    }

    buscar(valor) {
        this.temporal = this.inicio;
        let veces = 0;

        while(this.temporal) {
            if(this.temporal.dato == valor) {
                veces++;
            }
            this.temporal = this.temporal.siguiente;
        }

        return veces;
    }
}

//crear el vector
let vector = [5, 4, 10, -1, 5];

//instanciar un objeto para utilizar los métodos de insertar  y buscar de 
//la lista simple

const nodo = new Lista();

// nodo.insertar(vector[0]);
// nodo.insertar(vector[1]);
// nodo.insertar(vector[2]);
// nodo.insertar(vector[3]);
// nodo.insertar(vector[4]);

for(let i = 0; i < 5; i++) {
    nodo.insertar(vector[i]);
}

console.log(nodo);

//buscar un valor en la lista

// let numeroBuscar = parseInt(prompt("Ingresa el número a buscar"));
let numeroBuscar = 5;
numVeces = nodo.buscar(numeroBuscar);

if(numVeces >= 1) {
    console.log(`El número de veces que aparece el número ${numeroBuscar} es ${numVeces}`);
} else {
    console.log(`El número: ${numeroBuscar} no aparece en la lista`);
}