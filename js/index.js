"use strict";
var inputNombre = document.getElementById("nombre");
var inputApellidos = document.getElementById("apellidos");
var inputRut = document.getElementById("rut");
var inputEmail = document.getElementById("email");
var inputTelefono = document.getElementById("telefono");
var range = document.getElementById("nivel-programacion");
var textArea = document.getElementById("textarea");
var formulario = document.getElementById('formulario');
formulario.addEventListener("submit", function (event) {
    comprobarCampos();
    // event.preventDefault();
    // limpiarPantalla();
});
var botonReset = document.getElementById('boton-reset');
botonReset.onclick = function (event) {
    limpiarDatos();
    event.preventDefault();
};
function comprobarCampos() {
}
function limpiarDatos() {
    inputNombre.value = "";
    inputApellidos.value = "";
    inputRut.value = "";
    inputEmail.value = "";
    inputTelefono.value = "";
    range.value = "";
    textArea.value = "";
    var checklist = document.getElementsByName("lenguajes");
    for (var i = 0; i < checklist.length; i++) {
        var checklistValue = checklist[i];
        if (checklistValue.checked) {
            checklistValue.checked = false;
        }
    }
    var radioButtons = document.getElementsByName("años-experiencia");
    for (var i = 0; i < radioButtons.length; i++) {
        var radioButton = radioButtons[i];
        if (radioButton.checked) {
            radioButton.checked = false;
        }
    }
}
