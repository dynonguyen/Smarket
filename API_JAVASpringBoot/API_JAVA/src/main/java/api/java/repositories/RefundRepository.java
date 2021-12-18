package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.Refund;

@Repository
public interface RefundRepository extends JpaRepository<Refund, Integer> {
}
