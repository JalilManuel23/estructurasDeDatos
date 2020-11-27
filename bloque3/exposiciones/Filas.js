class Filas{
    constructor(){
        this.fila = [];
    }

    //Agregar un nuevo elemento
    encolar(elemento){
        this.fila.push(elemento);
        return this.fila;
    }
    
    //Eliminar el primer elemento
    desencolar(){
        this.fila.shift();
        return this.fila;
    }

    //Mostrar el valor del primer elemento
    frente(){
        return this.fila[0];
    }

    //Fila Vacía
    vacia(){
        if (this.fila.length === 0){
            return "La fila está vacía";
        } else {
            return "La fila NO está vacía";
        }
    }

    //Tamaño de la Fila
    tamanio(){
        return this.fila.length;
    }

    //Imprimir valores de la Fila
    imprimir(){
        return this.fila;
    }
}

const fila = new Filas();

fila.encolar("Pizza");
fila.encolar("Hot Dog");
fila.encolar("Hamburguesa");
fila.encolar("Papas Fritas");

fila.desencolar();

console.log(fila.frente());

console.log(fila.vacia());

console.log(fila.tamanio());

console.log(fila.imprimir());

console.log(fila);
