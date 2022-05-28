document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
});

function validarFormulario(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
        alert('No has escrito nada en nombre');
        return;
    }
    let email = document.getElementById('email').value;
    if (email.length == 0 ) {
        alert('El email no es válido');
        return;
        }
    let comment = document.getElementById('comment').value;
    if (comment.length == 0) {
        alert('Ingrese un comentario');
        return;
    } 
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}