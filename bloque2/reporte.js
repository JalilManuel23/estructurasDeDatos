//Clase Nodo
class Nodo {
    //Método constructor de clase nodo
    constructor(dato, siguiente, anterior) {
        this.siguiente = siguiente;
        this.anterior = anterior;
        this.dato = dato;
    }
}

class ListaDoble {
    //Método constructor de la clase lista doble
    constructor() {
        this.inicio = null;
        this.final = null;
        this.tamanio = 0;
    }

    //Método de imprimir los datos
    imprimirDatos() {
        let nodoActual = this.inicio;
        let resultado = "";

        while (nodoActual) {
            resultado += nodoActual.dato + " <-> ";
            nodoActual = nodoActual.siguiente;
        }

        return resultado;
    }

    buscar(lugar) {
        if (lugar < 0 || lugar > this.tamanio) {
            alert("La lista está vacía");
        }

        let nodoActual = this.inicio;
        let nodoAnterior;
        let resultado = "";
        if (lugar === 0) {
            nuevoNodo.siguiente = nodoActual;
            this.inicio = nuevoNodo;
        } else {
            for (let i = 0; i < lugar; i++) {
                nodoAnterior = nodoActual;
                nodoActual = nodoActual.siguiente;
            }
            resultado = nodoActual.dato;
            alert(resultado);
        }
    }

    //Método de agregar datos de un alumno
    agregar(dato) {
        const nuevoNodo = new Nodo(dato, null, this.final);

        if (this.final) {
            this.final.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.final;
            this.final = nuevoNodo;
        } else {
            this.inicio = nuevoNodo;
            this.final = nuevoNodo;
        }
        this.tamanio++;
    }

    //Método de eliminar un alumno según su posición (0 es el primer alumno)
    eliminar(lugar) {
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
        this.tamanio--;
    }
}

const DatosAlumno = new ListaDoble();
const CalifAlumno = new ListaDoble();

alert("¡Bienvenido al control escolar!");
let i = 0;

do {
    let opcion = prompt(
        "Ingresa una opción (1 - 6)\n1) Agregar Alumno\n2) Imprimir Alumno\n3) Eliminar Alumnos\n4) Ver todos Alumno"
    );

    switch (opcion) {
        case "1": //Caso de añadir datos del alumno
            alert("Añadir Alumnos");
            let dato1 = prompt("Ingresa el nombre del alumno");
            let dato2 = prompt("Ingresa el cuatrimestre del alumno");
            let dato3 = prompt("Ingresa el grupo del alumno");
            let dato4 = prompt("Ingresa la carrera del alumno");

            let datoAlumno =
                "ID: " +
                (i + 1) +
                "\nNombre: " +
                dato1 +
                "\nGrado y grupo: " +
                dato2 +
                " " +
                dato3 +
                "\nCarrera: " +
                dato4;

            let califs = "";
            for(let j = 0; j < 3; j++) {
                califs += prompt(`Ingrese la calificación #${j + 1}`);
                califs += ", ";
            }

            CalifAlumno.agregar(califs);
            DatosAlumno.agregar(datoAlumno);
            alert(DatosAlumno.imprimirDatos());
            alert(CalifAlumno.imprimirDatos());
            break;

        case "2": //Caso de buscar un alumno
            alert("Imprimir Alumno");
            let id = parseInt(prompt("Ingresa el ID del alumno: "));
            alert(DatosAlumno.buscar(id));
            alert(CalifAlumno.buscar(id));
            break;

        case "3": //Caso de eliminar alumno
            alert("Eliminar Alumno");
            id = parseInt(prompt("Ingresa el ID del alumno: "));
            alert(DatosAlumno.eliminar(id));
            alert(CalifAlumno.eliminar(id));
            break;

        case "4": //Caso de ver todos los alumnos
            if (DatosAlumno.tamanio > 0) {
                alert("Imprimir Alumnos");
                alert(DatosAlumno.imprimirDatos());
                alert(CalifAlumno.imprimirDatos());
                break;
            } else {
                alert("No hay alumnos registrados");
            }
            break;
    }

    respuestaSalir = prompt(
        "¿Desea realizar alguna otra acción? (S/N)"
    ).toLowerCase(); //Pregunta al usuario si desea continuar
    salir = respuestaSalir !== "s" ? true : false; //Asignación de valor a la variable salir con operador ternario (si es diferente a 's' toma el valor de true)
    i++;
} while (salir === false); 