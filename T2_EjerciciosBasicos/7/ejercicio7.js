// Autor:Jon Palacios 

var numCampos = parseInt(prompt("¿Cuantos campos quieres en el formulario?"));
    var formulario = document.createElement("form");
    for (var i = 0; i < numCampos; i++) {
      var tipo = prompt("Ingresa el tipo del campo (Texto, Password o Botón):");
      var nombre = prompt("Ingresa el nombre del campo:");
      var valorPorDefecto = prompt("Ingresa el valor por defecto del campo:");
      var campo;
      if (tipo === "Texto" ) {
        campo = document.createElement("input");
        campo.type = "text";
      } else if (tipo === "Password") {
        campo = document.createElement("input");
        campo.type = "password";
      } else if (tipo === "Botón" || tipo === "Boton") {
        campo = document.createElement("button");
        campo.type = "button";
      } else {
        alert("Tipo de campo no válido. Debe ser Texto, Password o Botón.");
        i--; 
      }
      campo.name = nombre;
      campo.value = valorPorDefecto;
      formulario.appendChild(campo);
    }
    document.body.appendChild(formulario);