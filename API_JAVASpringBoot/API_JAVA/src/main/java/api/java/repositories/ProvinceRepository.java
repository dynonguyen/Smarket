package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.Province;

@Repository
public interface ProvinceRepository extends JpaRepository<Province, Integer> {
    Province findByProvinceId(int provinceId);
}
