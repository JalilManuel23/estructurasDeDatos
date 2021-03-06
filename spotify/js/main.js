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
    //Método constructor de clase lista doble
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

    buscar(indice) {
        let temporal = this.inicio;
        let con = 0;

        while (temporal) {
            if (indice == con) {
                return temporal.dato;
            }
            temporal = temporal.siguiente;
            con++;
        }
    }
}

//Arreglo que guardara las listas, sus nombres y descripción
let listas = [];
let nombres = [];
let descripciones = [];

// Función que se ejecuta al cargar
function main() {
    mostrarPlaylists();
    mostrarCanciones();
    mostrarLetrero();
    reproducir(0);
}

// Función para crear una lista
function crearPlaylist() {
    const listaNueva = new ListaDoble();
    listas.push(listaNueva);

    let nombre = document.querySelector('#nombre').value;
    nombres.push(nombre);

    let descripcion = document.querySelector('#descripcion').value;
    descripciones.push(descripcion);

    mostrarPlaylists();
    limpiarCamposPlaylist();
}

function limpiarCamposPlaylist() {
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';
}

// Función para mostrar letrero de que no hay listas
// <p>Opss, no haz creado ninguna Playlist</p>
function mostrarLetrero() {
    const contenedor = document.querySelector('#contenedor-playlist');

    if (listas.length == 0) {
        const letrero = document.createElement("p");
        letrero.innerHTML = "Oops! no has creado ningúna playlist, crea una ahora.";
        letrero.id = "letrero";
        contenedor.appendChild(letrero);
    } else {
        const letreroBorrar = document.getElementById("letrero");

        if (letreroBorrar) {
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

function mostrarPlaylists() {
    $("#contenedor-playlist").html("");

    const contenedor = document.querySelector('#contenedor-playlist');
    const titulo = document.createElement("h2");
    const btnAgregar = document.createElement("a");

    titulo.className = "titulo";
    btnAgregar.className = "boton";
    btnAgregar.setAttribute("href", "#agregar-playlist");
    btnAgregar.id = "btn";

    titulo.textContent = "Playlist";
    btnAgregar.textContent = "CREAR PLAYLIST";
    
    contenedor.appendChild(titulo);
    contenedor.appendChild(btnAgregar);

    for(let i = 0; i < listas.length; i++) {
        const divPlaylist = document.createElement("a");
        const divImagen = document.createElement("div");
        const imagen = document.createElement("img");
        const nombre = document.createElement("p");
        const icono = document.createElement("p");

        divPlaylist.className = "playlist";
        divPlaylist.setAttribute('href', "#ver-playlist");
        divPlaylist.setAttribute('onclick', "mostrarPlaylistCompleta(" + i + ")");
        divImagen.className = "imagen-nombre-playlist";
        imagen.setAttribute('src', 'img/playlist-icono.png');
        icono.className = "icono-ver";
        icono.className = "icon-play";

        contenedor.appendChild(divPlaylist);
        divPlaylist.appendChild(divImagen);
        divImagen.appendChild(imagen);
        divImagen.appendChild(nombre);
        divPlaylist.appendChild(icono);

        nombre.innerHTML = nombres[i];
        mostrarLetrero();
    }
    // contador++;
}

// Limpia la parte de ver playlist
function limpiarVerPlaylist() {
    const divNombrePlaylist = document.querySelector("#nombre-playlist");
    const nombre = document.querySelector("#nombre-playlistCompleta");
    const descripcion = document.querySelector("#descripcion-playlistCompleta");

    divNombrePlaylist.removeChild(nombre);
    divNombrePlaylist.removeChild(descripcion);
}

// Arreglo para las canciones y los artistass/almbumes
let canciones = ["HOLIDAY", "THE SCOTTS", "Toosie Slide", "VIBEZ", "Baguettes (feat. Gunna)", "Poco", "Barquillero", "Los Niños", "El pariente", "El Buho"];
let artistasAlbum = ["Lil Nas X - HOLIDAY", "Travis Scott - THE SCOTTS", "Drake - Toosie Slide", "DaBaby - KIRK", "Smokepurpp - Lost Planet", "Reik, Christian Nodal - Poco", "Calibre 50 - Barquillero", "Grupo Codiciado - La verdad", "Grupo Recluta - El Pariente", "El Buho - Luis R Conriquez - El Buho"];
let imagenes = ["holiday.png", "scotts.png", "toosie.jpg", "vibez.jpg", "baguettes.jpg", "poco.jpg", "barquillero.jpg", "ninos.jpg", "pariente.jpg", "buho.jpg"];
// Función para mostrar las canciónes en el header
/* 
<div class="cancion">
    <div class="icono-info">
        <p class="subtitulo-cancion icon-list-add"></p>
        <div class="info-cancion">
            <p class="titulo-cancion">Canción 1</p>
            <p class="subtitulo-cancion">Nombre del artista - Album de la canción</p>
        </div>
    </div>
    <p class="duracion">3:46</p>
</div> */
function mostrarCanciones() {
    for (let i = 0; i < canciones.length; i++) {
        const divContenedorCanciones = document.querySelector("#contenedor-canciones");
        const divCancion = document.createElement("div");
        const divIconoInfo = document.createElement("div");
        const pIcono = document.createElement("p");
        const divInfo = document.createElement("div");
        const pTitulo = document.createElement("p");
        const pSubtitulo = document.createElement("p");
        const pDuracion = document.createElement("p");

        divCancion.className = "cancion";
        divIconoInfo.className = "icono-info";
        pIcono.className = "subtitulo-cancion";
        pIcono.className = "icon-list-add";
        divInfo.className = "info-cancion";
        pTitulo.className = "titulo-cancion";
        pSubtitulo.className = "subtitulo-cancion";
        pDuracion.className = "duracion";

        divCancion.setAttribute("onclick", "reproducir(" + i + ")");
        pIcono.setAttribute('onclick', 'seleccionarPlaylist(' + i + ')');

        pTitulo.textContent = canciones[i];
        pSubtitulo.textContent = artistasAlbum[i];
        pDuracion.textContent = "3:46";

        divContenedorCanciones.appendChild(divCancion);
        divCancion.appendChild(divIconoInfo);
        divIconoInfo.appendChild(pIcono);
        divIconoInfo.appendChild(divInfo);
        divInfo.appendChild(pTitulo);
        divInfo.appendChild(pSubtitulo);
        divCancion.appendChild(pDuracion);
    }
}

function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
        rv[i] = arr[i];
    return rv;
}

// Ventana Para seleccionar la Playlist y agregarla
function seleccionarPlaylist(i) {
    (async() => {

        const { value: lista } = await Swal.fire({
            title: 'Selecciona una Playlist',
            input: 'select',
            inputOptions: toObject(nombres),
            inputPlaceholder: 'Selecciona una Playlist',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: 'Añadir',
            cancelButtonText: 'Cancelar',
            background: '#181818',
        })

        if (lista) {
            Swal.fire({
                title: 'Canción Agregada',
                background: '#181818',
                confirmButtonText: 'Aceptar',
            });
            listas[lista].agregarInicio(canciones[i]);
        }
    })()
}

// Muestra la playlist en la seccion 2
/* <h2 id="nombre">Nombre Playlist</h2>
<p id="descripcion" class="descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem aut dolorum facere, ipsum quod facilis. Nobis ut dolores fugiat enim nam recusandae esse, aut officia eveniet incidunt eius ad dolore.</p> */
function mostrarPlaylistCompleta(indice) {
    const divNombrePlaylist = document.querySelector("#nombre-playlist");

    const iconoEditar = document.querySelector(".icon-pencil");

    const nombre = document.createElement("h2");
    const descripcion = document.createElement("p");

    descripcion.className = "descripcion";
    nombre.id = "nombre-playlistCompleta";
    descripcion.id = "descripcion-playlistCompleta";
    iconoEditar.setAttribute("onclick", "editarPlaylist(" + indice + ")");

    nombre.textContent = nombres[indice];
    descripcion.textContent = descripciones[indice];

    divNombrePlaylist.appendChild(nombre);
    divNombrePlaylist.appendChild(descripcion);

    mostrarCancionesPlaylist(indice);
}

// Mostrar canciones en las playlists
{
    /* <div class="cancion">
    <div class="icono-info">
        <a href="#" class="subtitulo-cancion icon-trash"></a>
        <div class="info-cancion">
            <p class="titulo-cancion">Canción 1</p>
            <p class="subtitulo-cancion">Nombre del artista - Album de la canción</p>
        </div>
    </div>
    <p class="duracion">3:46</p>
    </div> */
}

function mostrarCancionesPlaylist(indice) {
    //divContenedorCanciones.value = '';
    //divContenedorCanciones.removeChild(divCancion);
    //divCancion.removeChild(divIconoInfo);
    $("#canciones").html("");

    if(listas[indice].size > 0) {
        for (let i = 0; i < listas[indice].size; i++) {
            const divContenedorCanciones = document.querySelector("#canciones");
            const divCancion = document.createElement("div");
            const divIconoInfo = document.createElement("div");
            const pIcono = document.createElement("p");
            const divInfo = document.createElement("div");
            const pTitulo = document.createElement("p");
            const pSubtitulo = document.createElement("p");
            const pDuracion = document.createElement("p");

            divCancion.className = "cancion";
            divIconoInfo.className = "icono-info";
            pIcono.className = "subtitulo-cancion";
            pIcono.className = "icon-trash";
            pIcono.setAttribute("onclick", "borrarCancion(" + indice + ", " + i + ")");
            divInfo.className = "info-cancion";
            pTitulo.className = "titulo-cancion";
            pSubtitulo.className = "subtitulo-cancion";
            pDuracion.className = "duracion";

            pTitulo.textContent = listas[indice].buscar(i);

            let con = 0;

            let encontrado = false;
            while (encontrado == false) {
                if (canciones[con] == listas[indice].buscar(i)) {
                    break;
                }
                con++;
            }

            pSubtitulo.textContent = artistasAlbum[con];
            pDuracion.textContent = "3:46";

            divContenedorCanciones.appendChild(divCancion);
            divCancion.appendChild(divIconoInfo);
            divIconoInfo.appendChild(pIcono);
            divIconoInfo.appendChild(divInfo);
            divInfo.appendChild(pTitulo);
            divInfo.appendChild(pSubtitulo);
            divCancion.appendChild(pDuracion);
        }
    } else {
        const divContenedorCanciones = document.querySelector("#canciones");

        const mensaje = document.createElement("h3");
        mensaje.textContent = "Playlist vacia, agrega canciones para que aparezcan aquí";
        divContenedorCanciones.appendChild(mensaje);
    }
}

// Función para eliminar canciones

function borrarCancion(lista, cancion) {
    listas[lista].eliminarDe(cancion);
    mostrarCancionesPlaylist(lista);
}

// Función para editar playlist
function editarPlaylist(indice) {
    Swal.fire({
        title: "Ingresa el nuevo nombre de la Playlist",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
    }).then(resultado => {
        if (resultado.value) {
            let nombre = resultado.value;
            nombres[indice] = nombre;
            mostrarPlaylists();
            limpiarVerPlaylist();
            mostrarPlaylistCompleta(indice);
        }
    });
}

// Función para mostrar los datos en la barra de reproducción
function reproducir(indice) {
    const divRepImg = document.querySelectorAll(".reproductor-img-titulo");
    $(divRepImg).html("");
    
    for(let i = 0; i < 3; i++) {
        const img = document.createElement("img");
        console.log(imagenes[i])
        img.className = "img-r";
        img.setAttribute("src", "img/canciones/" + imagenes[indice]);
        
        divRepImg[i].appendChild(img);

        const divInfo = document.createElement("div");
        const titulo = document.createElement("p");
        const subtitulo = document.createElement("p");

        divInfo.className = "info-cancion info-r";
        titulo.className = "titulo-cancion titulo-r";
        subtitulo.className = "subtitulo-cancion subtitulo-r";

        titulo.textContent = canciones[indice];
        subtitulo.textContent = artistasAlbum[indice];

        divRepImg[i].appendChild(divInfo);
        divInfo.appendChild(titulo);
        divInfo.appendChild(subtitulo);
    }
}