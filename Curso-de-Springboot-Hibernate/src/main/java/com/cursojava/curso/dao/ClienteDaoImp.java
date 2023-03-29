package com.cursojava.curso.dao;

import com.cursojava.curso.models.Cliente;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class ClienteDaoImp implements ClienteDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Cliente> cargarClientes() {
        String query = "From Cliente";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminarCliente(Long id) {
        Cliente cliente = entityManager.find(Cliente.class, id);
        entityManager.remove(cliente);
    }

    @Override
    public void registrarCliente(Cliente cliente) {
        entityManager.merge(cliente);
    }
}
