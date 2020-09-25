function calcular(){
    let numero1 = parseFloat(document.querySelector("#numero1").value);
    let numero2 = parseFloat(document.querySelector("#numero2").value);
    let operacion = document.querySelector("#operacion").value;
    let p_resultado = document.querySelector("#resultado");
    let resultado, operador;

    switch (operacion){
        case "suma":
            resultado = numero1 + numero2;
            operador = " + ";
        break;

        case "resta":
            resultado = numero1 - numero2;
            operador = " - ";
        break;

        case "multiplicacion":
            resultado = numero1 * numero2;
            operador = " x ";
        break;

        case "division":
            resultado = numero1 / numero2;
            operador = " / ";
        break;
    }
    
    p_resultado.textContent = `${numero1} ${operador} ${numero2} = ${resultado.toFixed(2)}`;
}