package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.AdminAccount;

@Repository
public interface AdminAccountRepository extends JpaRepository<AdminAccount, Integer> {
}
