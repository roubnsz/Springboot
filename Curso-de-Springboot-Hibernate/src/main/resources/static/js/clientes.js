console.log("hola");
// Call the dataTables jQuery plugin
$(document).ready(function() {

    cargarClientes();

    $('#clientes').DataTable();
    actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario() {
    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}


async function cargarClientes() {

    const request = await fetch('api/clientes', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    }
    });
    const clientes = await request.json()


    let listadoHtml = '';
    for(let cliente of clientes) {
    let botonEliminar = '<a href="#" onclick="eliminarCliente('+cliente.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    let fechaNacimiento = cliente.fechaNacimiento.substr(0,10);

    let clienteHtml = '<tr><td>'+cliente.id+'</td><td>'+ cliente.nombre +'</td><td>'+ cliente.apellido +'</td><td>'+cliente.email+'</td><td>'+cliente.rfc+'</td><td>'+fechaNacimiento+'</td><td>'+cliente.telefono+'</td><td>'+botonEliminar+'</td></tr>';
    listadoHtml += clienteHtml;
    }

    document.querySelector('#clientes tbody').outerHTML = listadoHtml;

    }


    async function eliminarCliente(id) {

    if(!confirm('¿Desea eliminar al cliente ?')) {
        return;
    }

    const request = await fetch('api/clientes/' + id, {
        method:'DELETE',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        }
    });

    location.reload();

    }

    function habilitarRegistroCliente() {
    let gestionClientes = document.getElementById('gestionClientes');
    let registroClientes = document.getElementById('registroClientes');

    gestionClientes.style.display = 'none';
    registroClientes.style.display = 'block';

    }