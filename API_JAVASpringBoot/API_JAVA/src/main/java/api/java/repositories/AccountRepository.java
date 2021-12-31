package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    Account findByUsername(String username);
}
