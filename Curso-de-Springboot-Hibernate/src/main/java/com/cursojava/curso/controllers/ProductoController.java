package com.cursojava.curso.controllers;

import com.cursojava.curso.dao.ProductoDao;
import com.cursojava.curso.models.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductoController {

    @Autowired
    private ProductoDao productoDao;


    @RequestMapping(value = "api/productos", method = RequestMethod.GET)
    public List<Producto> cargarProductos() {
        return productoDao.cargarProductos();
    }

    @RequestMapping(value = "api/productos", method = RequestMethod.POST)
    public void registrarProducto(@RequestBody Producto producto) {
        productoDao.registrarProducto(producto);
    }

    @RequestMapping(value = "api/productos/{id}", method = RequestMethod.DELETE)
    public  void eliminarProducto(@PathVariable Long id) {
        productoDao.eliminarProducto(id);
    }

}
