package api.java.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    List<Account> findByUsername(String username);
}
