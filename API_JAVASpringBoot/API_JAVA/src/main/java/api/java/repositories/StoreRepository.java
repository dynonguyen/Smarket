package api.java.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import api.java.entities.Store;

@Repository
@Transactional
public interface StoreRepository extends JpaRepository<Store, Integer> {
  
  @Modifying
  @Query("UPDATE Store SET status=:status WHERE storeId=:storeId")
  public void updateStatus(@Param("status") int status, @Param("storeId") int storeId);
}
