package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import api.java.entities.Store;

@Repository
public interface StoreRepository extends JpaRepository<Store, Integer> {
    @Query("select count(distinct a.peopleId)"
            + " from Store s, AppUser a, Ward w, District d, Province p"
            + " where s.userId = a.userId and a.ward = w.wardId and w.district = d.districtId and d.province = p.provinceId"
            + " and w.level = :level and p.provinceId = :provinceId")
    public int countCusBelongToRegionLevel(int level, int provinceId);
}
