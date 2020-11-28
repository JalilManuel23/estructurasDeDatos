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
    let turno = Math.floor(Math.random() * (5 - 2)) + 2;
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
    // padre.appendChild(aBoton);

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
    // padre.removeChild(document.querySelector(".botones"));
    padre.appendChild(boton);
}

function respuesta(opcion) {

    var respuesta1 = "";
    var respuesta2 = "";

    switch(opcion) {
        case 1: {
            respuesta1 = "Horarios y sucursales";
            respuesta2 = "Visita este link para que tengas más información sobre las sucursales: https://www.google.com/maps/search/innovasport+durango/@24.0424447,-104.6617881,12z/data=!3m1!4b1";
        }break;
        case 2: {
            respuesta1 = "Estado de Pedido";
            respuesta2 = "Visita este link para que tengas más información sobre las tu pedido: https://www.dhl.com/mx-es/home/rastreo.html";
        }break;
        case 3: {
            respuesta1 = "Quejas y Sugerencias";
            respuesta2 = "Comunicate al número 554777222 y realiza tu queja o sugerencia.";
        }break;
    }

    const divMensaje1 = document.createElement("div");
    const divMensaje2 = document.createElement("div");
    const boton = document.createElement("a");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    
    divMensaje1.className = "fila-izquierda";
    divMensaje2.className = "fila-derecha";
    p1.className = "mensaje";
    p2.className = "mensaje";
    boton.className = "botones";
 

    p1.textContent = respuesta1;
    p2.textContent = respuesta2;
    boton.textContent = "Salir";

    boton.setAttribute("href", "javascript:cerrar()");

    const padre = document.querySelector("#contenido-conversacion");
    padre.appendChild(divMensaje1);
    padre.appendChild(divMensaje2);
    divMensaje1.appendChild(p1);
    divMensaje2.appendChild(p2);

    const pd = document.querySelector("#btn");
    pd.appendChild(boton);
}