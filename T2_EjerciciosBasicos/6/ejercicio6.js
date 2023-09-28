// Autor:Jon Palacios 

var alto = parseInt(prompt("Ingresa el alto de la tabla:"));
var ancho = parseInt(prompt("Ingresa el ancho de la tabla:"));
var colspan = parseInt(prompt("Ingresa el valor de colspan horizontal a partir de la segunda fila:"));
document.write("<table border='1'>");
var contador = 1;
for (var i = 0; i < alto; i++) {
  document.write("<tr>");
  for (var j = 0; j < ancho; j++) {
    if (i === 0 || (i > 0 && j % colspan !== 0)) {
      document.write("<td>" + contador + "</td>");
      contador++;
    } else {
      document.write("<td colspan='" + colspan + "'>" + contador + "</td>");
      contador++;
      j += colspan - 1; 
    }
  }
  document.write("</tr>");
}
document.write("</table>");