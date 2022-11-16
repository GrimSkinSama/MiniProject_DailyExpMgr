package miniproject.bca.co.id.DailyExpenseManager.service;

import miniproject.bca.co.id.DailyExpenseManager.model.Income;
import miniproject.bca.co.id.DailyExpenseManager.model.IncomeCategory;

import java.util.List;

public interface IIncomeCategoryService {
    void insert(IncomeCategory incomeCategory);
    void update(IncomeCategory incomeCategory);
    void delete(IncomeCategory incomeCategory);
    IncomeCategory findTheIncome(IncomeCategory incomeCategory);
    List<IncomeCategory> allIncome();
}
