package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.models.ProductType;

@Repository
public interface ProductTypeRepository extends JpaRepository<ProductType, Long> {

}