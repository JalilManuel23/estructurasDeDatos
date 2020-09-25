let numeroAlumnos, salir, respuestaSalir,numeroMaterias, i = 0; //Declaración de variables
let datosAlumno = []; //Declaración de matriz de datos de alumno (la posición i representa el número de alumno y la j los datos en la posicón 0-->nombre, 1-->cuatri, 2-->grupo y 3-->carrera)
let calificaciones = []; // Declaración de matriz de calificaciones (la posición i representa el número de alumno y la posición j la materia)

alert("Bienvenido a control escolar");

// En este do while se muestran las opciones para manipular las matrices
do{
    opcion = prompt("Ingresa una opción (1 - 6)\n1) Agregar Alumno\n2) Editar Alumno\n3) Eliminar Alumnos\n4) Ver todos Alumno\n5) Buscar Alumno");

    switch(opcion){
        case "1": //Caso de editar datos
            alert("Añadir Alumnos");
            datosAlumno.push(new Array());
            datosAlumno[i].push(prompt("Ingresa el nombre del alumno"));
            datosAlumno[i].push(prompt("Ingresa el cuatrimestre del alumno"));
            datosAlumno[i].push(prompt("Ingresa el grupo del alumno"));
            datosAlumno[i].push(prompt("Ingresa la carrera del alumno"));
        
            alert("Por favor registre las calificaciones del alumno");
            numeroMaterias = parseInt(prompt("¿Cuántas materias desea agregar?")); //Lectura del número de materias
        
            for(let j = 0; j < numeroMaterias; j++){
                calificaciones.push(new Array());
                calificaciones[i].push(parseFloat(prompt(`Añada la calificación de la materia #${j+1}`))); //Lectura de la calificación de cada materia
            }
        
            alert("ALUMNO AGREGADO CORRECTAMENTE");
            i++;
        break;

        case "2": //Caso de editar datos
            if(datosAlumno.length > 0){ //Este if sirve para ver si hay alumnos registrados
                let alumnoEditar = parseInt(prompt("Ingrese el ID del alumno a modificar")); //Lee la posición i de la matriz de DatosAlumnos
                let opcionEditar = parseInt(prompt("Ingrese un opción para modificar.\n1) Nombre\n2) Cuatrimestre\n3) Grupo\n4) Carrera")); //Lee la posición j de la matriz datosAlumno

                let valorNuevo = prompt("Ingrese el valor nuevo"); //Lee el nuevo valor a guardar
                datosAlumno[alumnoEditar][opcionEditar - 1] = valorNuevo; //Le asigna el valor, pero le tiene que restar 1 a la posición de j
                alert("Datos Editados correctamente");
            }else{
                alert("No hay alumnos registrados");
            }
        break;

        case "3": //Caso de eliminar alumno
            if(datosAlumno.length > 0){//Este if sirve para ver si hay alumnos registrados
                let alumnoEliminar = parseInt(prompt("Ingrese el ID del alumno a eliminar")); //Lee la posición i de la matriz de DatosAlumnos
                
                delete datosAlumno[alumnoEliminar];
                delete calificaciones[alumnoEliminar];

                alert(datosAlumno);
                alert(calificaciones);
                alert("Datos Editados correctamente");
            }else{
                alert("No hay alumnos registrados");
            }
        break;

        case "4": //Caso de ver todos los alumnos
            if(datosAlumno.length > 0){//Este if sirve para ver si hay alumnos registrados

            }else{
                alert("No hay alumnos registrados");
            }
        break;

        
        case "5": //Caso de buscar alumno
            if(datosAlumno.length > 0){//Este if sirve para ver si hay alumnos registrados

            }else{
                alert("No hay alumnos registrados");
            }
        break;
    }
    alert(datosAlumno);
    alert(calificaciones);
    respuestaSalir = prompt("¿Desea realizar alguna otra acción? (S/N)").toLowerCase(); //Pregunta al usuario si desea continuar
    salir = (respuestaSalir !== "s") ? true : false; //Asignación de valor a la variable salir con operador ternario (si es diferente a 's' toma el valor de true)
}while(salir === false); //si la variable salir es igual a false se sigue ejecutando