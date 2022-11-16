package miniproject.bca.co.id.DailyExpenseManager.repository;

import miniproject.bca.co.id.DailyExpenseManager.model.Income;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IncomeRepository extends JpaRepository<Income, Integer> {
    Income findIncomeById(int id);
}
