package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.Shipper;

@Repository
public interface ShipperRepository extends JpaRepository<Shipper, Integer> {
    Shipper getById(int shipperId);
}
