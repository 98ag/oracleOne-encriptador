//Asignado de cajas de texto a variables
let textoEntrada = document.getElementById("textoEntrada");
let textoSalida = document.getElementById("textoSalida");

//Asignado de botones a variables
let botonEncriptado = document.getElementById("encriptar");
let botonDesencriptado = document.getElementById("desencriptar");
let botonCopiar = document.getElementById("copiar");
let botonLimpiar = document.getElementById("limpiar");

//Asignado de los elementos a esconder en la caja de salida
let elementosSalida = document.getElementById("elementosTemporalesSalida");

//Encriptado de texto
function encriptarTexto(texto){
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

//Desencriptado de texto
function desencriptarTexto(texto){
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

//Encriptado de texto
//Encripta el placeholder de la caja de texto si no se escribe nada 
function llamarEncriptar(){
    if (textoEntrada.value == ""){
        textoSalida.value = encriptarTexto(textoEntrada.placeholder);
    }
    else{
        textoSalida.value = encriptarTexto(textoEntrada.value);
    }

    if ( elementosSalida.hidden == false){
        elementosSalida.hidden = true;
    }
}

//Botones
function llamarDesencriptar(){
    textoSalida.value = desencriptarTexto(textoEntrada.value);

    if ( elementosSalida.hidden == false){
        elementosSalida.hidden = true;
    }
}

function copiarSalida(){
    navigator.clipboard.writeText(textoSalida.value);
}

function limpiarEntrada(){
    textoEntrada.value = "";
    textoEntrada.focus();
}

botonEncriptado.onclick = llamarEncriptar;
botonDesencriptado.onclick = llamarDesencriptar;
botonCopiar.onclick = copiarSalida;
botonLimpiar.onclick = limpiarEntrada;
