// Autor:Jon Palacios 
// Fecha: 2023-09-27 
// Descripcion: 
var alto = parseInt(prompt("Ingresa el alto de la tabla:"));
var ancho = parseInt(prompt("Ingresa el ancho de la tabla:"));
document.write("<table border='1'>");
var contador = 1;
for (var i = 0; i < alto; i++) {
  document.write("<tr>");
  for (var j = 0; j < ancho; j++) {
    document.write("<td>" + contador + "</td>");
    contador++;
  }
  document.write("</tr>");
}

// Cerrar la etiqueta de la tabla
document.write("</table>");