package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.Ward;

@Repository
public interface WardRepository extends JpaRepository<Ward, Integer> {
}
