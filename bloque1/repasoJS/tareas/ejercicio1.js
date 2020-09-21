let nombre, edad;

nombre = prompt("Ingresa tu nombre");
edad = prompt("Ingresa tu edad");
edad = parseInt(edad);
alert(`Hola ${nombre} tienes ${edad} años y el año que viene tendrás ${edad + 1} años.`);