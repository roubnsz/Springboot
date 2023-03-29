package com.cursojava.curso.dao;

import com.cursojava.curso.models.Producto;

import java.util.List;

public interface ProductoDao {

    List<Producto> cargarProductos();

    void eliminarProducto(Long id);

    void registrarProducto(Producto producto);

}
