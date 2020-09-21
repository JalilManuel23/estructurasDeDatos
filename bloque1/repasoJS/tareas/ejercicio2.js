let opcion = parseInt(prompt("Ingresa una opción para obtener el área de la figura 1)Triángulo  2)Rectángulo  3)Circulo"));
let area;

switch (opcion){
    case 1:{
        let base = parseFloat(prompt("Ingresa la base del triángulo"));
        let altura = parseFloat(prompt("Ingresa la altura del triángulo"));
        area = (base * altura) / 2;
        alert(`El área del triángulo es ${area}`);
    }break;
    case 2:{
        let base = parseFloat(prompt("Ingresa la base del rectángulo"));
        let altura = parseFloat(prompt("Ingresa la altura del rectángulo"));
        area = base * altura;
        alert(`El área del rectángulo es ${area}`);
    }break;
    case 3:{
        let radio = parseFloat(prompt("Ingresa el rádio del circulo"));
        area = Math.PI * Math.pow(radio,2);
        alert(`El área del circulo es ${area}`);
    }break;
    default:{
        alert("Opción no valida.");
    }break;
}