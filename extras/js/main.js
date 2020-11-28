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

function main() {
    let turno = Math.floor(Math.random() * (8 - 5)) + 5;
    let tiempo = turno * 2;


    for(let i = 0; i < turno; i++) {
        fila.encolar("i");
    }

    const pLugar = document.createElement("p");
    const pTiempo = document.createElement("p");
    const aBoton = document.createElement("a");

    pLugar.className = "lugar";
    pTiempo.className = "tiempo";
    aBoton.className = "botones";
    aBoton.setAttribute("href", "javascript:cerrar()");

    pLugar.textContent = "Usted se encuentra en el lugar: " + turno + " de la cola."
    aBoton.textContent = "Salir";

    const padre = document.querySelector("#contenido-chat");

    padre.appendChild(pLugar);
    padre.appendChild(pTiempo);
    contarTiempo(tiempo);
    padre.appendChild(aBoton);

}

function cerrar() {
    window.open('', '_parent', '');
    window.close();
} 

function contarTiempo(inicio) {
    var n = inicio;
    var l = document.querySelector(".tiempo");
    var lugar = document.querySelector(".lugar");
    var numero = n / 2;

    window.setInterval(function(){
    l.innerHTML = "El tiempo en antenderlo es de aproximadamente: " +  n + " segundos."
    lugar.innerHTML = "Usted se encuentra en el lugar: " + numero + " de la cola.";
    fila.desencolar();
    n--;

    if(n == 0) {
        abrirVentana();
    }

    if(n <= 0) {
        l.innerHTML = "El tiempo en antenderlo es de aproximadamente: 0 segundos.";
        lugar.innerHTML = "Usted se encuentra en el lugar: 0 de la cola.";
    }

    if(n % 2 == 0) {
        numero--;
    }
    },1000);
}

function abrirVentana (){
    const boton = document.createElement("a");

    boton.className = "botones";
    boton.textContent = " Abrir Chat";
    boton.setAttribute("href", "conversacion.html");
    boton.setAttribute("onclick", "window.open('conversacion.html', 'newwindow', 'width=800,height=4000');");

    const padre = document.querySelector("#contenido-chat");
    padre.removeChild(document.querySelector(".botones"));
    padre.appendChild(boton);
}
