function comprobar(){
    let numero = document.querySelector("#numero").value;
    let resultado = document.querySelector("#resultado");

    let mensaje = (numero % 2 == 0) ? `${numero} es par` : `${numero} es impar`;

    resultado.textContent = mensaje;
}