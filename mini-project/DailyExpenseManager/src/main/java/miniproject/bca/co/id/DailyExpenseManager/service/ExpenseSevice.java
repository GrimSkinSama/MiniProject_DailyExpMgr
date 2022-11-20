package miniproject.bca.co.id.DailyExpenseManager.service;

import miniproject.bca.co.id.DailyExpenseManager.model.Expense;
import miniproject.bca.co.id.DailyExpenseManager.model.ExpenseJSON;
import miniproject.bca.co.id.DailyExpenseManager.model.Income;
import miniproject.bca.co.id.DailyExpenseManager.model.IncomeJSON;
import miniproject.bca.co.id.DailyExpenseManager.repository.ExpenseCategoryRepository;
import miniproject.bca.co.id.DailyExpenseManager.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExpenseSevice {

    @Autowired
    ExpenseRepository expenseRepository;

    @Autowired
    ExpenseCategoryRepository expenseCategoryRepository;

    public List<ExpenseJSON> allExpenseJSON(){
        List<Expense> expenses =  expenseRepository.findAll();
        List<ExpenseJSON> expenseJSONS = new ArrayList<>();

        for (Expense i : expenses) {
            String category = expenseCategoryRepository.findExpenseCategoryById(i.getCategory_id()).getCategory_name();
            ExpenseJSON expenseJSON = new ExpenseJSON(i.getId(),category,i.getAmount(),i.getDescription(),i.getDate());
            expenseJSONS.add(expenseJSON);
        }
        return expenseJSONS;
    }
}
