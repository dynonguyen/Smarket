package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.StoreFeedback;

@Repository
public interface StoreFeedbackRepository extends JpaRepository<StoreFeedback, Integer> {
}
