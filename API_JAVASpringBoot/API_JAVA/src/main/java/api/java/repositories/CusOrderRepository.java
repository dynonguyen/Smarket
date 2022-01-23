package api.java.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import api.java.entities.CusOrder;

@Repository
@Transactional
public interface CusOrderRepository extends JpaRepository<CusOrder, Integer> {
    int countByShipperId(int shipperId);

    CusOrder findById(int orderId);
    List<CusOrder> findAll();

    @Modifying
    @Query("UPDATE CusOrder SET orderStatus=:orderStatus WHERE orderId=:orderId")
    public void updateOrderStatus(@Param("orderStatus") int orderStatus, @Param("orderId") int orderId);
}
