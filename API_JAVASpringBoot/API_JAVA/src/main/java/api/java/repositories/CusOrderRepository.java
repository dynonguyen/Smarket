package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.CusOrder;

@Repository
public interface CusOrderRepository extends JpaRepository<CusOrder, Integer> {
    int countByShipperId(int shipperId);
}
