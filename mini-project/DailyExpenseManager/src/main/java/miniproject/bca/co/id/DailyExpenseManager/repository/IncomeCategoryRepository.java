package miniproject.bca.co.id.DailyExpenseManager.repository;

import miniproject.bca.co.id.DailyExpenseManager.model.IncomeCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IncomeCategoryRepository extends JpaRepository<IncomeCategory, Integer> {
    IncomeCategory findIncomeCategoryById(int id);
}
