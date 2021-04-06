let inputNombre:any = document.getElementById("nombre");
let inputApellidos:any = document.getElementById("apellidos");
let inputRut:any = document.getElementById("rut");
let inputEmail:any = document.getElementById("email");
let inputTelefono:any = document.getElementById("telefono");

let range:any = document.getElementById("nivel-programacion");
let textArea:any = document.getElementById("textarea");

let formulario:any = document.getElementById('formulario');
formulario.addEventListener("submit", function(event:any){

    comprobarCampos();
    // event.preventDefault();
    // limpiarPantalla();
});

let botonReset:any = document.getElementById('boton-reset');
botonReset.onclick = function(event:any){
    limpiarDatos();
    event.preventDefault();
}

function comprobarCampos(){
    
}

function limpiarDatos(){

    inputNombre.value = "";
    inputApellidos.value = "";
    inputRut.value = "";
    inputEmail.value = "";
    inputTelefono.value = "";
    range.value = "";
    textArea.value = "";

    let checklist = document.getElementsByName("lenguajes");
    
    for(let i:number = 0 ; i < checklist.length ; i++){
        let checklistValue:any = checklist[i];
        if(checklistValue.checked){
            checklistValue.checked = false;
        }
        
    }

    let radioButtons = document.getElementsByName("años-experiencia");
    for(let i:number = 0 ; i < radioButtons.length ; i++){
        let radioButton:any = radioButtons[i];

        if(radioButton.checked){
            radioButton.checked = false;
        }
        
    }

}