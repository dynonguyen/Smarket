package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.OrderDetailFeedback;

@Repository
public interface OrderDetailFeedbackRepository extends JpaRepository<OrderDetailFeedback, Integer> {
}
