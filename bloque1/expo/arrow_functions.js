function obtenerMitad(){
    let numero = document.querySelector("#numero").value;
    let resultado = document.querySelector("#resultado");

    let multiplicar = numero => numero / 2;

    resultado.textContent = `La mitad de ${numero} es: ${multiplicar(numero)}`;
}