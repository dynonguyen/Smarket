package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.AppUser;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Integer> {
    AppUser getById(int Id);
}
