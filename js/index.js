"use strict";
let inputNombre = document.getElementById("nombre");
let inputApellidos = document.getElementById("apellidos");
let inputRut = document.getElementById("rut");
let inputEmail = document.getElementById("email");
let inputTelefono = document.getElementById("telefono");
let range = document.getElementById("nivel-programacion");
let textArea = document.getElementById("textarea");
let formulario = document.getElementById('formulario');
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (comprobarCampos() == true) {
        limpiarPantalla();
    }
});
//comprueba todos los campos input requeridos, retorna true si todos los datos fueron llenados correctamente, false en caso contrario
function comprobarCampos() {
    let divMensajeError = document.getElementById("mensaje-error");
    let telefonoValue = inputTelefono.value;
    let stringNombre = inputNombre.value;
    let stringRut = inputRut.value;
    let telefonoArreglado = true;
    let nombreArreglado = true;
    let rutArreglado = true;
    if (!esAlfabetico(stringNombre)) {
        let errorNombre = document.getElementById("h4-nombre");
        if (errorNombre == null) {
            errorNombre = document.createElement("h4");
        }
        errorNombre.id = "h4-nombre";
        errorNombre.innerHTML = "Error, el nombre solo puede contener letras";
        divMensajeError.appendChild(errorNombre);
        //inputNombre.value = "";
        divMensajeError.classList.add("mensaje-error");
        nombreArreglado = false;
        window.scrollTo(0, document.body.scrollHeight);
    }
    else {
        let errorNombre = document.getElementById("h4-nombre");
        if (errorNombre != null) {
            errorNombre.remove();
        }
        nombreArreglado = true;
    }
    if (!esRut(stringRut)) {
        let errorRut = document.getElementById("h4-rut");
        if (errorRut == null) {
            errorRut = document.createElement("h4");
        }
        errorRut.id = "h4-rut";
        errorRut.innerHTML = "Error, formato del Rut es incorrecto, debe ser de la forma (1111111-1)";
        divMensajeError.appendChild(errorRut);
        //inputNombre.value = "";
        divMensajeError.classList.add("mensaje-error");
        rutArreglado = false;
        window.scrollTo(0, document.body.scrollHeight);
    }
    else {
        let errorRut = document.getElementById("h4-rut");
        if (errorRut != null) {
            errorRut.remove();
        }
        rutArreglado = true;
    }
    if (telefonoValue.length != 9) {
        let errorTelefono = document.getElementById("h4-telefono");
        if (errorTelefono == null) {
            errorTelefono = document.createElement("h4");
        }
        errorTelefono.id = "h4-telefono";
        errorTelefono.innerHTML = "Error, el telefono debe contener 9 digitos";
        divMensajeError.appendChild(errorTelefono);
        //inputTelefono.value = "";
        divMensajeError.classList.add("mensaje-error");
        telefonoArreglado = false;
        window.scrollTo(0, document.body.scrollHeight);
    }
    else {
        let errorTelefono = document.getElementById("h4-telefono");
        if (errorTelefono != null) {
            errorTelefono.remove();
        }
        telefonoArreglado = true;
    }
    if (nombreArreglado == true && telefonoArreglado == true && rutArreglado == true) {
        divMensajeError.style.display = "none";
        return true;
    }
    else {
        return false;
    }
}
//oculta el formulario y muestra un mensaje predeterminado
function limpiarPantalla() {
    formulario.style.display = "none";
    let mensajeH3 = document.createElement("h3");
    mensajeH3.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    mensajeH3.style.fontSize = "35px";
    mensajeH3.style.textAlign = "center";
    let mainDiv = document.getElementById("main");
    mainDiv.appendChild(mensajeH3);
}
//retorna true si es que el valor es un rut con el formato correcto
function esRut(rut) {
    for (let i = 0; i < rut.length; i++) {
        if ((rut.charCodeAt(i) < 48 || rut.charCodeAt(i) > 57) && (rut.charCodeAt(i) != 45) && (rut.charCodeAt(i) != 75) && (rut.charCodeAt(i) != 107)) {
            return false;
        }
    }
    if (rut.length > 10 || rut.length < 7) {
        return false;
    }
    if (rut.charAt(rut.length - 2) != '-') {
        return false;
    }
    return true;
}
//retorna true si el nombre solo tiene letras o signo espacio
function esAlfabetico(text) {
    for (let i = 0; i < text.length; i++) {
        if ((text.charCodeAt(i) < 97 || text.charCodeAt(i) > 122) && (text.charCodeAt(i) < 65 || text.charCodeAt(i) > 90) && (text.charCodeAt(i) != 32)) {
            return false;
        }
    }
    return true;
}
let botonReset = document.getElementById('boton-reset');
botonReset.onclick = function (event) {
    limpiarDatos();
    event.preventDefault();
};
//limpia todos los campos que tengan algun dato
function limpiarDatos() {
    inputNombre.value = "";
    inputApellidos.value = "";
    inputRut.value = "";
    inputEmail.value = "";
    inputTelefono.value = "";
    range.value = "";
    textArea.value = "";
    let checklist = document.getElementsByName("lenguajes");
    for (let i = 0; i < checklist.length; i++) {
        let checklistValue = checklist[i];
        if (checklistValue.checked) {
            checklistValue.checked = false;
        }
    }
    let radioButtons = document.getElementsByName("años-experiencia");
    for (let i = 0; i < radioButtons.length; i++) {
        let radioButton = radioButtons[i];
        if (radioButton.checked) {
            radioButton.checked = false;
        }
    }
}
