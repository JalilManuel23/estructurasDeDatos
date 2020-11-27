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

//Arreglo que guardara las listas, sus nombres y descripción
let listas = [];
let nombres = [];
let descripciones = [];

// Función para crear una lista
function crearPlaylist() {
    const listaNueva = new ListaDoble();
    listas.push(listaNueva);

    let nombre = document.querySelector('#nombre').value;
    nombres.push(nombre);

    let descripcion = document.querySelector('#descripcion').value;
    descripciones.push(descripcion);

    mostrarPlaylist(nombre);
}

// Función para mostrar letrero de que no hay listas
// <p>Opss, no haz creado ninguna Playlist</p>
function mostrarLetrero() {
    const contenedor = document.querySelector('#contenedor-playlist');

    if(listas.length == 0) {
        const letrero = document.createElement("p");
        letrero.innerHTML = "Opss, no haz creado ninguna Playlist";
        letrero.id = "letrero";
        contenedor.appendChild(letrero);
    } else {
        const letreroBorrar = document.getElementById("letrero");

        if(letreroBorrar){
            contenedor.removeChild(letreroBorrar);
        }
    }
}

//Función para mostrar las listas creadas

/* 
    <div class="playlist">
        <div class="imagen-nombre-playlist">
            <img src="img/playlist-icono.png" alt="Imagen PLaylist">
            <p>Nombre de la Playlist</p>
        </div>
        <p class="icono-ver icon-play"></p>
    </div>  
*/
let contador = 0;

function mostrarPlaylist(nombreLista) {
    const contenedor = document.querySelector('#contenedor-playlist');

    const divPlaylist = document.createElement("a");
    const divImagen = document.createElement("div");
    const imagen = document.createElement("img");
    const nombre = document.createElement("p");
    const icono = document.createElement("p");
    
    divPlaylist.className = "playlist";
    divPlaylist.setAttribute('href', "#ver-playlist");
    divPlaylist.setAttribute('onclick', 'mostrarPlaylistCompleta()');
    divImagen.className = "imagen-nombre-playlist";
    imagen.setAttribute('src', 'img/playlist-icono.png');
    icono.className = "icono-ver";
    icono.className = "icon-play";

    contenedor.appendChild(divPlaylist);
    divPlaylist.appendChild(divImagen);
    divImagen.appendChild(imagen);
    divImagen.appendChild(nombre);
    divPlaylist.appendChild(icono);
    
    nombre.innerHTML = nombreLista;
    mostrarLetrero();

    contador++;
}

// Muestra la playlist en la seccion 2
function mostrarPlaylistCompleta() {
    alert(indice);
}