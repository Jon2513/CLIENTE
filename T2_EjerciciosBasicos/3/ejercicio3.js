// Autor:Jon Palacios 

var suma = 0;
for (var i = 1; i < 1000; i++) {
    if (i % 23 === 0) {
        document.getElementById("multiplesList").innerHTML += "<li>" + i + "</li>";
        suma += i;
    }
}
document.getElementById("sumaMultiplos").textContent = suma;