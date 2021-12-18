package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.District;

@Repository
public interface DistrictRepository extends JpaRepository<District, Integer> {
}
