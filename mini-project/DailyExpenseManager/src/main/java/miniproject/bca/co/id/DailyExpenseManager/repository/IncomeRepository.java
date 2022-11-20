package miniproject.bca.co.id.DailyExpenseManager.repository;

import miniproject.bca.co.id.DailyExpenseManager.model.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IncomeRepository extends JpaRepository<Income, Integer> {
    Income findIncomeById(int id);

    @Query(value = "SELECT SUM(amount) FROM income", nativeQuery = true)
    Integer getTotalIncome();
}
