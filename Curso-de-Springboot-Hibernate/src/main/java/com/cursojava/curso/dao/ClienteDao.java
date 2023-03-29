package com.cursojava.curso.dao;

import com.cursojava.curso.models.Cliente;

import java.util.List;

public interface ClienteDao {

    List<Cliente> cargarClientes();

    void eliminarCliente(Long id);

    void registrarCliente(Cliente cliente);
}
