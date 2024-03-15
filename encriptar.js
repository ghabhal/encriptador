// esta funcion se encarga de encriptar el mensaje
function encriptar(texto) {
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    return texto;
}

// esta funcion se encarga de desencriptar el mensaje
function desencriptar(texto) {
    texto = texto.replace(/ufat/g, 'u');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/enter/g, 'e');
    return texto;
}

function procesar() {
    var texto = document.getElementById('texto').value;
    var resultado = '';
    if (document.getElementById('encriptar').checked) {
        resultado = encriptar(texto);
    } else {
        try {
            resultado = desencriptar(texto);
        } catch (error) {
            alert('Texto encriptado no válido');
        }
    }
    document.getElementById('resultado').value = resultado;
}

function copiarAlPortapapeles() {
    var resultado = document.getElementById('resultado').value;
    navigator.clipboard.writeText(resultado)
    .then(() => {
        alert('Texto copiado al portapapeles');
    })
    .catch(err => {
        alert('Error al copiar texto al portapapeles');
    });
}