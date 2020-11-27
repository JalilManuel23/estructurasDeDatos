//Estructura de datos dinamica pila a traves de nodos

class Nodo {
    constructor (dato,enlace){
        this.dato = dato;
        this.enlace = enlace;
    }
}

class Pilas{
    constructor(){
        this.tope = null;
    }

    push(valor){
        const nodonuevo = new Nodo(valor,this.tope);
        this.tope = nodonuevo;
    }

    pop(){
        if(this.tope != null){
            this.temp = this.tope;
            this.tope = this.tope.enlace;
            delete this.temp;
        }
    }

    pilavacia(){
        if (this.tope == null){
            return true;
        }
    }

    pilaSize(){
        let pilasize = 0;
        this.temp = this.tope;

        while(this.temp != null){
            this.temp = this.temp.enlace;   
            pilasize++; 
        }
        delete this.temp;
        return pilasize;
    }

    cimaPila(){
        if(!this.pilavacia()){
            return this.tope.dato;
        }else{
            return null;
        }
    }

    limpiarPila(){

        let tam = this.pilaSize();
        for (let i = 1; i<=tam;i++){
            this.pop();
        }
    }

    imprimirPila(){
        
    }

    buscarPila(valor){
        let encontro=0;
        this.temp = this.tope;

        while(this.temp != null){
            if(valor == this.temp.dato){
                encontro++;
                this.temp = this.temp.enlace;
            }else{
                this.temp = this.temp.enlace;
            }
        }
        return encontro;
    }

}


//Crear mi código para trabajar con los objetos a partir
// de la clase pilas

const pila = new Pilas();

//Agregar nodos a la pila 

pila.push(23);
pila.push(43);
pila.push(53);
pila.push(63);
pila.push(33);

console.log(pila);

//Desapilar nodos de la pila

// pila.pop();
// pila.pop();
// pila.pop();
// pila.pop();
// pila.pop();

console.log(pila);


//Verificar si la pila es vacia
let vacia = pila.pilavacia();

if (vacia){
    console.log('La pila esta Vacia');
}else{
    console.log('La pila no esta Vacia');
}

//Tamaño de la pila
let tam = pila.pilaSize();
console.log('El tamaño de la pila es: '+tam);

let cima = pila.cimaPila();
if(cima != null){
    console.log('La cima de la pila es: '+cima);
}else{
    console.log('La lista esta vacia, no hay cima')
}

console.log(pila);

// pila.limpiarPila();

console.log(pila);

let buscar = pila.buscarPila();
if(buscar>0){
    console.log('Encontro el elemento');
}else{
    console.log('No encontro el elemento');
}


 