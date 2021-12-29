package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.ProductImage;

@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage, Integer> {
}
