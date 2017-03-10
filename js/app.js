/*Aqui se ha declarado una variable global a la cual accesaran todas las funciones
ya que a ella se le ha asignado un array vacio en el cual se almacenaran los datos que se
ingresaran (objetos)*/
var estudiantes = [];

/*En esta linea de código se ha declarado una función la cual me mostrara la lista de
estudiantes que se generara mas adelante*/
function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;

}
/*La siguiente funcion se usara para obtener los datos del usuario y crear la lista
de estudiantes*/

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var nombreEstudiante = prompt("Ingrese el nombre del estudiante.");
    var puntosTecnicos = parseInt(prompt("Ingrese puntos técnicos."));
    var puntosHSE = parseInt(prompt("Ingrese puntos HSE."));
    var estudiante = { nombreEstudiante, puntosTecnicos, puntosHSE

  };

      estudiantes.push(estudiante);
      return estudiante;

  }

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreEstudiante + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var muestraLista = " ";
    estudiantes.forEach(function(estudiante){
      muestraLista += mostrar(estudiante);
    });
    return muestraLista;

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var busquedaEstudiante = estudiantes.filter(function(estudiante){
      return estudiante.nombre.toLowerCase() === estudiante.nombre.tolocaleLowerCase();
    });
    return busquedaEstudiante;

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var topEstudiantes = estudiantes.sort(function(a, b){
      return b.puntosTecnicos - a.puntosTecnicos;
    });
    return topEstudiantes;

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var puntosHSE = estudiantes.sort(function(a, b){
      return b.puntosHSE - a.puntosHSE;
    });
    return puntosHSE;

}
