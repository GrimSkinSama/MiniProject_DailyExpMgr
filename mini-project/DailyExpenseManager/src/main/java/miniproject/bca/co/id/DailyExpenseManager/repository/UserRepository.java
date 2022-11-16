package miniproject.bca.co.id.DailyExpenseManager.repository;

import miniproject.bca.co.id.DailyExpenseManager.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername (String username);
}
