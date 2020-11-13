//Funciones
/*
  A)funciones escritas mediante la palabra reservada
    "Function"
 
  B)Funciones de Flecha "Arrow" 
 
  De acuerdo al funcionamiento de las "funciones" se puede decir lo siguiente:
  => No Regresan Valor (void)
  => Si regresan valor "return"
  => No Regresan Valor (void) y reciben parametros
  => Si regresan valor "return" y reciben parametros
 
*/
 
//caso A y No Regresan Valor (void)
 
function saludo1(){
    console.log("Hola buen dia");
  }
   
  //caso B y No Regresan Valor (void)
   
  const saludo11=()=> console.log("Hola buen dia");
   
  //mandar llamar la funcion
   
  saludo1();
   
  saludo11();
   
   
  //caso A y No Regresan Valor (void)
   
  function saludo111(){
    console.log("Hola buen dia 1");
    console.log("Hola buen dia 2");
    console.log("Hola buen dia 3");
    console.log("Hola buen dia 4");
    console.log("Hola buen dia 5");
    console.log("Hola buen dia 6");
    console.log("Hola buen dia 7");
  }
   
  //caso B y No Regresan Valor (void)
   
  const saludo1111=()=> {
    console.log("Hola buen dia 1");
    console.log("Hola buen dia 2");
    console.log("Hola buen dia 3");
    console.log("Hola buen dia 4");
    console.log("Hola buen dia 5");
    console.log("Hola buen dia 6");
    console.log("Hola buen dia 7");
  }
   
  //mandar llamar la funcion
   
  saludo111();
   
  saludo1111();
   
   
  //caso A y Si regresan valor "return"
   
  function saludo2(){
    return "Hola buen dia 888";
  }
   
  //caso B y Si regresan valor "return"
   
  const saludo22=()=>{
    return "Hola buen dia";
  }
   
   
  console.log(saludo2());
   
  let respuesta;
   
  respuesta=saludo22()+" Bye";
   
  console.log(respuesta);
   
   
  //caso A y No Regresan Valor (void) y reciben parametros
   
  function saludo3(mensaje){
    console.log(`Hola buen dia 3 ${mensaje}`);
  }
   
  //caso B y No Regresan Valor (void) y reciben parametros
   
  const saludo33=(mensaje)=> {console.log(`Hola buen dia 3 ${mensaje}`)};
   
  //mandar llamar
   
  saludo3("Hola venimos en paz");
   
  saludo33("Hola venimos en paz");
   
   
  //caso A Si regresan valor "return" y reciben parametros
  function saludo4(mensaje){
    return `Hola buen dia 3 ${mensaje}`;
  }
   
  //caso B Si regresan valor "return" y reciben parametros
  const saludo44=(mensaje)=> {return `Hola buen dia 3 ${mensaje}`};
   
  console.log(saludo4("Hay una serpiente en mi bota"));
  console.log(saludo44("Hay una serpiente en mi bota"));