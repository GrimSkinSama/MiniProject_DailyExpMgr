package miniproject.bca.co.id.DailyExpenseManager.service;

import miniproject.bca.co.id.DailyExpenseManager.model.Income;

import java.util.List;

public interface IIncomeService {
    void insert(Income income);
    void update(Income income);
    void delete(Income income);
    Income findTheIncome(Income income);
    List<Income> allIncome();
}
