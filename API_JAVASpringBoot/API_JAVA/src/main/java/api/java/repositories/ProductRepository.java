package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
}
