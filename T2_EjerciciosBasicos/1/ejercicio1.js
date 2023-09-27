// Autor:Jon Palacios 
// Fecha: 2023-09-26 
// Descripcion: 
var entrada_teclado;
entrada_teclado = prompt("Introduce el posible palindromo");
var palindromo = entrada_teclado.split("").reverse().join("");
if (entrada_teclado == palindromo) {
   alert("Es un palindromo");
}
else {
    alert("No es un palindromo");
}