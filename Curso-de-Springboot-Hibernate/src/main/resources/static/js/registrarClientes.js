console.log("hola");
$(document).ready(function() {
    // on ready
});


async function registrarCliente() {
    let datos = {};
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.rfc = document.getElementById('txtRfc').value;
    datos.fechaNacimiento = document.getElementById('txtFechaDeNacimiento').value;
    datos.telefono = document.getElementById('txtTelefono').value;

    const request = await fetch('api/clientes', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert("El cliente " + datos.nombre + " fue agregado con exito!");
    window.location.href = 'clientes.html'

}