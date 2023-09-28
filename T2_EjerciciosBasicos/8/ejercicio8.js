// Autor:Jon Palacios 
var numCampos = parseInt(prompt("¿Cuantos campos quieres en el formulario?"));
var formulario = document.createElement("form");

for (var i = 0; i < numCampos; i++) {
  var tipo = prompt("Ingresa el tipo del campo (Texto, Password, Botón, Select, Radio o Checkbox):");
  var nombre = prompt("Ingresa el nombre del campo:");
  var campo;

  if (tipo === "Texto") {
    campo = document.createElement("input");
    campo.type = "text";
  } else if (tipo === "Password") {
    campo = document.createElement("input");
    campo.type = "password";
  } else if (tipo === "Botón" || tipo === "Boton") {
    campo = document.createElement("button");
    campo.type = "button";
    var etiqueta = prompt("Ingresa la etiqueta del botón:");
    campo.textContent = etiqueta;
  } else if (tipo === "Select") {
    campo = document.createElement("select");
    var numOpciones = parseInt(prompt("¿Cuántas opciones quieres en el select?"));
    for (var j = 0; j < numOpciones; j++) {
      var opcion = prompt("Ingresa una opción:");
      var option = document.createElement("option");
      option.text = opcion;
      campo.add(option);
    }
  } else if (tipo === "Radio") {
    campo = document.createElement("input");
    campo.type = "radio";
    var etiqueta = prompt("Ingresa la etiqueta del radio:");
    campo.id = nombre;
    campo.name = nombre;
    var label = document.createElement("label");
    label.textContent = etiqueta;
    label.setAttribute("for", nombre);
    formulario.appendChild(label);
  } else if (tipo === "Checkbox") {
    campo = document.createElement("input");
    campo.type = "checkbox";
    campo.name = nombre;
    var etiqueta = prompt("Ingresa la etiqueta del checkbox:");
    var label = document.createElement("label");
    label.textContent = etiqueta;
    label.appendChild(campo);
    formulario.appendChild(label);
  } else {
    alert("Tipo de campo no válido. Debe ser Texto, Password, Botón, Select, Radio o Checkbox.");
    i--;
  }

  campo.name = nombre;
  formulario.appendChild(campo);
}

document.body.appendChild(formulario);