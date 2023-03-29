package com.cursojava.curso.dao;

import com.cursojava.curso.models.Producto;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class ProductoDaoImp implements ProductoDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Producto> cargarProductos() {
        String query = "FROM Producto";
        return  entityManager.createQuery(query).getResultList();

    }

    @Override
    public void eliminarProducto(Long id) {
        Producto producto = entityManager.find(Producto.class, id);
            entityManager.remove(producto);
    }

    @Override
    public void registrarProducto(Producto producto) {
        entityManager.merge(producto);
    }

}
