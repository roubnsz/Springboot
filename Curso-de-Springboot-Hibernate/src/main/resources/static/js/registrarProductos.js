$(document).ready(function() {
   // on ready
});


async function registrarProducto() {
  let datos = {};
  datos.nombre = document.getElementById('txtNombre').value;
  datos.descripcion = document.getElementById('txtDescripcion').value;
  datos.precio = document.getElementById('txtPrecio').value;
  datos.precioVenta = document.getElementById('txtPrecioVenta').value;
  datos.departamento = document.getElementById('txtDepartamento').value;
  datos.stock = document.getElementById('txtStock').value;

  const request = await fetch('api/productos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("El producto " + datos.nombre + " fue agregado con exito!");
  window.location.href = 'productos.html'

}