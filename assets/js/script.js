function cifrar() {
    var mensaje = document.getElementById("mensaje").value;
    var offset = parseInt(document.getElementById("offset").value);
    var textoCifrado = "";

    for (let c of mensaje) {
        // Mayúsculas
        if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
            let codigo = c.charCodeAt(0);
            codigo -= 65;
            codigo = (codigo + offset) % 26;
            codigo += 65;
            textoCifrado += String.fromCharCode(codigo);
        }
        // Minúsculas
        else if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
            let codigo = c.charCodeAt(0);
            codigo -= 97;
            codigo = (codigo + offset) % 26;
            codigo += 97;
            textoCifrado += String.fromCharCode(codigo);
        }
        // Números
        else if (!isNaN(parseInt(c))) {
            let codigo = c.charCodeAt(0);
            codigo -= 48;
            codigo = (codigo + offset) % 10;
            codigo += 48;
            textoCifrado += String.fromCharCode(codigo);
        }
        // Espacios 
        else if ( c == " ") {
                textoCifrado += " ";
        }
        
    }



    document.getElementById("cifrado").value = textoCifrado;
}

function descifrar() {
    var mensajeCifrado = document.getElementById("mensaje").value;
    var offset = parseInt(document.getElementById("offset").value);
    var textoDescifrado = "";

    for (let c of mensajeCifrado) {
        // Mayúsculas
        if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
            let codigo = c.charCodeAt(0);
            codigo -= 65;
            codigo = (codigo - offset + 26) % 26;
            codigo += 65;
            textoDescifrado += String.fromCharCode(codigo);
        }
        // Minúsculas
        else if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
            let codigo = c.charCodeAt(0);
            codigo -= 97;
            codigo = (codigo - offset + 26) % 26;
            codigo += 97;
            textoDescifrado += String.fromCharCode(codigo);
        }
        // Números
        else if (!isNaN(parseInt(c))) {
            let codigo = c.charCodeAt(0);
            codigo -= 48;
            codigo = (codigo - offset + 10) % 10;
            codigo += 48;
            textoDescifrado += String.fromCharCode(codigo);
        }
        // Espacios 
        else if ( c == " ") {
            textoDescifrado += " ";
        }
        
    }

    
    document.getElementById("cifrado").value = textoDescifrado;
}

