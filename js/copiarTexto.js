document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los párrafos que estén dentro de los divs con la clase "codigo"
    const parrafos = document.querySelectorAll('.codigo p');

    // Recorrer cada párrafo y asignarle el evento "onclick"
    parrafos.forEach(function(parrafo) {
        parrafo.onclick = function() {
            copiarTexto(parrafo);
        };
    });
});

function copiarTexto(parrafo) {
    // Clonar el párrafo para manipular su contenido sin el comentario
    const tempElement = parrafo.cloneNode(true);

    // Eliminar el comentario (span) del clon
    const spanComentario = tempElement.querySelector('span');
    if (spanComentario) {
        spanComentario.remove();
    }

    // Obtener el texto limpio sin el comentario
    const textoParaCopiar = tempElement.textContent.trim();

    // Crear un textarea temporal para copiar el texto al portapapeles
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textoParaCopiar;
    document.body.appendChild(tempTextarea);

    // Seleccionar el contenido del textarea y copiarlo al portapapeles
    tempTextarea.select();
    document.execCommand('copy');

    // Eliminar el textarea temporal
    document.body.removeChild(tempTextarea);

    // Confirmación visual (opcional)
    // alert('Comando copiado: ' + textoParaCopiar);

    mostrarMensajeCopiado();
}

function mostrarMensajeCopiado() {
    const mensaje = document.getElementById('mensajeCopiado');
    mensaje.style.display = 'block'; // Mostrar el mensaje

    // Ocultar el mensaje después de 0.5 segundos
    setTimeout(function() {
        mensaje.style.display = 'none';
    }, 1200);
}