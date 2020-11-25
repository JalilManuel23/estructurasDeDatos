class Pila {
    constructor() {
        this.pil = [];
    }

    apilar(elemento) {
        this.pil.push(elemento);
        return this.pil;

    }

    despilar() {
        this.pil.pop();
    }

    tamanio() {
        return this.pil.length;
    }

    imprimir() {
        return this.pil;
    }
}


const pila = new Pila();

pila.apilar("Camisa Blanca");
pila.apilar("Pantalon");
pila.apilar("calcetines");
pila.despilar();
pila.despilar();
console.log(pila.tamanio());


console.log(pila.imprimir());