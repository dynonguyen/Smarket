package api.java.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import api.java.entities.Shipper;

@Repository
@Transactional
public interface ShipperRepository extends JpaRepository<Shipper, Integer> {
    Shipper getById(int shipperId);

    Shipper findByUserId(int userId);

    @Modifying
    @Query("UPDATE Shipper SET status=:status WHERE shipperId=:shipperId")
    public void updateStatus(@Param("status") int status, @Param("shipperId") int shipperId);
}
