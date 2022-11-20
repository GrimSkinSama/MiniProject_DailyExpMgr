package miniproject.bca.co.id.DailyExpenseManager.repository;

import miniproject.bca.co.id.DailyExpenseManager.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {
    Expense findExpenseById(int id);

    @Query(value = "SELECT SUM(amount) FROM expense", nativeQuery = true)
    Integer getTotalExpense();
}
