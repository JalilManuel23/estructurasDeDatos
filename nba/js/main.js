class Fila {

    //Método constructor de la clase Fila
    constructor() {
        this.nodos = {};
        this.inicio = 0;
        this.tamanio = 0;
    }

    //Método para agregar un nuevo Nodo a la fila
    push(dato) {
        this.nodos[this.tamanio] = dato;
        this.tamanio++;
    }

    //Método para eliminar el primer valor de la fila (FIFO)
    pop() {
        let mensaje = "";
        if (this.inicio === this.tamanio) {
            mensaje = "Lo sentimos, no hay ningún partido registrado.";
            return mensaje;
        }

        mensaje = `Se ha eliminado el siguiente partido: \n ${this.nodos[this.inicio]}`;
        delete this.nodos[this.inicio];
        this.inicio++;

        return mensaje;
    }

    //Método para obtener el tamaño de la fila
    obtenerTamano() {
        return this.tamanio - this.inicio;
    }

    //Método para comprobar si la fila está vacía
    estaVacia() {
        let mensaje = "";
        if (this.obtenerTamano() === 0) {
            mensaje = "No hay ningún registro en el sistema.";
            return mensaje;
        } else {
            mensaje = `Hay ${this.tamanio - this.inicio} registro(s) en el sistema.`;
            return mensaje;
        }
    }

    //Método para imprimir el primer nodo de la fila
    primerNodo() {
        let mensaje = "";
        if (this.obtenerTamano === 0) {
            mensaje = "No hay ningún registro en el sistema.";
            return mensaje;
        }
        return this.nodos[this.inicio];
    }

    //Método para imprimir todos los valores de la fila
    imprimirFila() {
        let mensaje = "";
        if (this.obtenerTamano === 0) {
            mensaje = "No hay ningún registro en el sistema.";
            return mensaje;
        }

        let resultado = "";
        for (let i = this.inicio; i < this.tamanio; i++) {
            resultado += `${this.nodos[i]} \n`;
        }

        return resultado;
    }
}

//Se instancia una nueva fila llamada "partidos"
const partidos = new Fila();

function main() {
    aviso();
}


//Añadir partido
function agregarPartido() {
    let equipo1 = document.getElementById("equipo1").value;
    let puntaje1 = document.getElementById("puntosl").value;
    let equipo2 = document.getElementById("equipo2").value;
    let puntaje2 = document.getElementById("puntosv").value;

    let partido = `${equipo1} ${puntaje1} - ${puntaje2} ${equipo2}`;

    partidos.push(partido);
    console.log(partidos.imprimirFila());

    let partidosReg = partidos.obtenerTamano();
    let imprimir = document.getElementById("tit");
    imprimir.textContent = partidosReg;

    mostrarPartidos();
}

function aviso() {
    let mensaje = "";
    if (partidos.obtenerTamano() <= 0) {
        mensaje = "No has registrado ningún partido";

        const divContenedor = document.querySelector("#partidos-registrados");

        const registro = document.createElement("h3");
        registro.className = "partido";
        registro.id = "partido"
        registro.innerHTML = mensaje;

        divContenedor.appendChild(registro);
    }
}

console.log(partidos.obtenerTamano());

function mostrarPartidos() {
    for (let i = partidos.inicio; i < partidos.obtenerTamano(); i++) {
        $("#partidos-registrados2").html("");
    }

    for (let i = partidos.inicio; i < partidos.obtenerTamano(); i++) {
        const divContenedor = document.querySelector("#partidos-registrados2");

        const registro = document.createElement("h3");
        registro.className = "partido";
        registro.id = "partido"
        registro.textContent = partidos.nodos[i];

        divContenedor.appendChild(registro);
    }

}


//Conteo de partidos registrados