package miniproject.bca.co.id.DailyExpenseManager.repository;

import miniproject.bca.co.id.DailyExpenseManager.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {
    Expense findExpenseById(int id);
}
