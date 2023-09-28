// Autor:Jon Palacios 

var suma = 0;
document.write("<ul id='multiplesList'></ul>");
for (var i = 1; i < 1000; i++) {
    if (i % 23 === 0) {
        document.write("<li>" + i + "</li>");
         suma += i;
}
}
document.write("<p id='sumaMultiplos'>" + suma + "</p>");