package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.Store;

@Repository
public interface StoreRepository extends JpaRepository<Store, Integer> {
}
