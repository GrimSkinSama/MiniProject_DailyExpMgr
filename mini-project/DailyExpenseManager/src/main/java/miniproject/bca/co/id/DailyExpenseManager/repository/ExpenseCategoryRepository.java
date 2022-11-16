package miniproject.bca.co.id.DailyExpenseManager.repository;

import miniproject.bca.co.id.DailyExpenseManager.model.ExpenseCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseCategoryRepository extends JpaRepository<ExpenseCategory, Integer> {
    ExpenseCategory findExpenseCategoryById(int id);
}
