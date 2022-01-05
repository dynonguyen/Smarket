package api.java.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.CusOrder;

@Repository
public interface CusOrderRepository extends JpaRepository<CusOrder, Integer> {
    int countByShipperId(int shipperId);

    CusOrder findById(int orderId);
    List<CusOrder> findAll();
}
