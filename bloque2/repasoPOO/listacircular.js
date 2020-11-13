//Código Listas Circulares

/*
    const nuevoNodo = {
        dato: 'perro',
        siguiente: 'apunte al mismo nodo que se está creando'
    } 
*/

class Nodo {
    constructor (valor,sig){
        this.valor = valor;
        this.enlaceSig = sig;
    }
}

class listaCircular{
    constructor (){
        this.inicio = null;
        this.fin = null;
    }

    insertarNodo(valor){
        const nodoNuevo = new Nodo(valor,this.inicio);
        
        if(this.inicio == null){
            this.inicio = nodoNuevo;
            this.fin = nodoNuevo;
        } else{
            this.fin.enlaceSig = nodoNuevo;
            this.fin = nodoNuevo;
        }
    }

    eliminarUltimoNodo() {
        if(this.inicio == null && this.fin == null) {
            return null;
        }

        let valorRegresar = this.fin.valor;

        if(this.inicio === this.fin) {
            this.inicio = null;
            this.fin = null;
        } else {
           this.fin.enlaceSig = null;
           this.temporal = this.inicio;

           while(this.temporal.enlaceSig.valor != this.fin.valor) {
                this.temporal = this.temporal.enlaceSig;
           }

           this.fin = this.temporal;
           this.fin.enlaceSig = this.inicio;
        }
        this.temporal = null;
        return valorRegresar;
    }

    imprimir() {
        let actual = this.inicio;
        let resultado = '';

        while(actual != this.fin) {
            resultado += actual.valor + " -> ";
            actual = actual.enlaceSig;
        }
        return resultado + this.fin.valor;
        // return resultado;
    }

    buscar(dato) {
        this.temporal = this.inicio;
        let encontrado = false;

        while(this.temporal.enlaceSig.valor !== this.inicio.valor) {
            if(this.temporal.valor === dato) {
                encontrado = true;
            }
            this.temporal = this.temporal.enlaceSig;
        }

        if(this.fin.valor === dato) {
            encontrado = true;
        }

        if(encontrado) {
            let cambiar = prompt("Desea cambiar el valor (S/N)");

            if(cambiar == 'S') {
                let datoNuevo = prompt("Ingrese el nuevo dato");
                this.temporal = this.inicio;

                while(this.temporal.enlaceSig.valor !== this.inicio.valor) {
                    if(this.temporal.enlaceSig.valor === dato) {
                        this.temporal.enlaceSig.valor = datoNuevo;
                    }
                    this.temporal = this.temporal.enlaceSig;
                }
            }
        }
        return encontrado;
    }

    listaVacia(){
        this.temporal = this.inicio;
        let contador = 0;

        if(this.inicio != null && this.fin != null){
            while(this.temporal.valor != this.fin.valor) {
                contador++;
                this.temporal = this.temporal.enlaceSig;
            }
            return contador + 1;
        }else{
            return 'Lista vacía';
        }
    }
    
    insertarNodoInicio(valor) {
        const nodoNuevo = new Nodo(valor,this.inicio);
        
        if(this.inicio == null){
            this.inicio = nodoNuevo;
            this.fin = nodoNuevo;
        } else{
            this.fin.enlaceSig = nodoNuevo;
            this.inicio = nodoNuevo;
        }
    }

    eliminarPrimerNodo() {
        if(this.inicio == null && this.fin == null) {
            return null;
        }

        let valorRegresar = this.inicio.valor;

        if(this.inicio === this.fin) {
            this.inicio = null;
            this.fin = null;
        } else {
            let segundoNodo = this.inicio.enlaceSig;

            this.fin.enlaceSig = segundoNodo;
            this.inicio = segundoNodo;
        }

        return valorRegresar;
    }
}

/*
Crear un objeto que se llame "apuntador" que tenga un puntero que se llame "Inicio", 
y que este la primera vez apunte a null
*/

const apuntador = new listaCircular();

/*
Crear un método en la clase listaCircular que permita crear un nodo que se llame 
"nodoNuevo" que reciba como parámetro un valor String y que se comporte el enlace 
siguiente como una Lista Circular 
*/

apuntador.insertarNodo("perro");
apuntador.insertarNodo("gato");
apuntador.insertarNodo("caballo");
apuntador.insertarNodo("s");
apuntador.insertarNodo("covid");
// apuntador.insertarNodoInicio("jueves");
// apuntador.insertarNodoInicio("martes");
// apuntador.eliminarPrimerNodo();


console.log(apuntador.buscar("s"));


// apuntador.eliminarUltimoNodo();

console.log(apuntador.listaVacia());

console.log(apuntador.imprimir());