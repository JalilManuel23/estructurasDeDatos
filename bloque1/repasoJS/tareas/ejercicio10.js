let colores = ['azul', 'amarillo', 'rojo', 'verde', 'rosa'];

color = prompt("Ingrese un nombre de un color").toLowerCase();

let mensaje = (colores.indexOf(color) === 0) ? "El color está en el Array" : "El color NO está en el array";

alert(mensaje);