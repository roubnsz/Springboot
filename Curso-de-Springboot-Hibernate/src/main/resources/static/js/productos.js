// Call the dataTables jQuery plugin
$(document).ready(function() {

    cargarProductos();

  $('#productos').DataTable();
   actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario() {
    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}


async function cargarProductos() {

      const request = await fetch('api/productos', {
        method: 'GET',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Authorization': localStorage.token
           }
      });
      const productos = await request.json()



    let listadoHtml = '';
    for(let producto of productos) {
    let botonEliminar = '<a href="#" onclick="eliminarProducto('+producto.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';

    let productoHtml = '<tr><td>'+producto.id+'</td><td>'+ producto.nombre +'</td><td>'+ producto.descripcion +'</td><td>'+'$ '+producto.precio+'</td><td>'+'$ '+producto.precioVenta+'</td><td>'+producto.departamento+'</td><td>'+producto.stock+'</td><td>'+botonEliminar+'</td></tr>';
    listadoHtml += productoHtml;
    }


      document.querySelector('#productos tbody').outerHTML = listadoHtml;

    }
/*
    function getHeaders() {
         return {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
                 };
    }
*/
    async function eliminarProducto(id) {

    if(!confirm('¿Desea eliminar el producto?')) {
        return;
    }

    const request = await fetch('api/productos/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
            }
    });

    location.reload();
}

function habilitarRegistro() {

let gestionProductos = document.getElementById('gestionProductos');
let registroProductos = document.getElementById('registroProductos');

gestionProductos.style.display = "none";
registroProductos.style.display = "block";

}

