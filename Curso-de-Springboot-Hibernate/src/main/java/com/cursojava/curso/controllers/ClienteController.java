package com.cursojava.curso.controllers;

import com.cursojava.curso.dao.ClienteDao;
import com.cursojava.curso.models.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClienteController {

    @Autowired
    private ClienteDao clienteDao;

    @RequestMapping(value = "api/clientes", method = RequestMethod.GET)
    public List<Cliente> cargarClientes() {
        return clienteDao.cargarClientes();
    }

    @RequestMapping(value = "api/clientes", method = RequestMethod.POST)
    public void registrarCliente(@RequestBody Cliente cliente) {
        clienteDao.registrarCliente(cliente);
    }

    @RequestMapping(value = "api/clientes/{id}", method = RequestMethod.DELETE)
    public  void eliminarCliente(@PathVariable Long id) {
        clienteDao.eliminarCliente(id);
    }

}
