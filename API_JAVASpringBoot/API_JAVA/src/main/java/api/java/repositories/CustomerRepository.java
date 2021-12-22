package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}
