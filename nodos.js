function añadirNodo() {
    var elemento = document.createElement('li');
    var texto = document.createTextNode('Tarea establecida desde JS');
    elemento.appendChild(texto);
    elemento.setAttribute('class', 'alert alert-success');

    var contenedor = document.getElementById('contenedor');
    contenedor.appendChild(elemento);
}

/* para el btn */
var btnAñadir = document.getElementById('btnAñadir');
btnAñadir.addEventListener('click', añadirNodo);