package miniproject.bca.co.id.DailyExpenseManager.service;

import miniproject.bca.co.id.DailyExpenseManager.model.Income;
import miniproject.bca.co.id.DailyExpenseManager.repository.IncomeRepository;
import miniproject.bca.co.id.DailyExpenseManager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncomeService implements IIncomeService{

    @Autowired
    IncomeRepository incomeRepository;

    @Override
    public void insert(Income income) {

    }

    @Override
    public void update(Income income) {

    }

    @Override
    public void delete(Income income) {

    }

    @Override
    public Income findTheIncome(Income income) {
        return null;
    }

    @Override
    public List<Income> allIncome() {
        return null;
    }
}
