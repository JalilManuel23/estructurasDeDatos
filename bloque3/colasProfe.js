//Estructura de datos dinamica "cola" o " fila", "queue" con nodos

class Nodos {
    constructor(dato, enlace) {
        this.dato = dato;
        this.enlace = enlace;
    }
}

class Colas {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    push(valor) {
        const nodoNuevo = new Nodos(valor, null);

        if(this.primero == null && this.ultimo == null) {
            this.primero = nodoNuevo;
            this.ultimo = nodoNuevo;
        } else {
            this.ultimo.enlace = nodoNuevo;
            this.ultimo = nodoNuevo;
        }
    }

    pop() {
        if(this.primero != null && this.ultimo != null) {
            if(this.primero == this.ultimo) {
                this.primero = null;
                this.ultimo = null;
            } else {
                this.auxPrimero = this.primero;
                this.primero = this.primero.enlace;
                this.auxPrimero.enlace = null;
                delete(this.auxPrimero);
            }
        }
    }

    colaVacia() {
        if(this.primero == null && this.ultimo == null) {
            return true;
        }
    }

    inicioCola() {
        if(this.colaVacia())
            return false;
        else
            return this.primero.dato;
    }

    tamanioCola() {
        let tam = 0;
        this.auxPrimero = this.primero;

        while(this.auxPrimero) {
            tam++;
            this.auxPrimero = this.auxPrimero.enlace;
        }

        return tam;
    }

    buscarcola(valor)
    {
        let encontre=0;

        this.aux_primero=this.primero;

        while (this.aux_primero!=null)
        {
           if (valor==this.aux_primero.dato)
              encontre++; 
           this.aux_primero=this.aux_primero.enlace;
        }

        delete this.aux_primero;

        return encontre;
    }

    imprimircola()
    {
        let elementoscola="";

        this.aux_primero=this.primero;

        while (this.aux_primero!=null)
        {
            elementoscola=elementoscola+this.aux_primero.dato+",";
           this.aux_primero=this.aux_primero.enlace;
        }

        delete this.aux_primero;

        return elementoscola;
    }
}

const cola = new Colas();

cola.encolar(2);
cola.encolar(24);
cola.encolar(24);
cola.encolar(2);


console.log(cola);

let frente = cola.inicioCola();
if(cola.colaVacia()){
    console.log('La cola está vacia');
}else {
    console.log('La cola NO está vacia');
    console.log(frente);
}
    