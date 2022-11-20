package miniproject.bca.co.id.DailyExpenseManager.service;

import miniproject.bca.co.id.DailyExpenseManager.model.Income;
import miniproject.bca.co.id.DailyExpenseManager.model.IncomeJSON;
import miniproject.bca.co.id.DailyExpenseManager.repository.IncomeRepository;
import miniproject.bca.co.id.DailyExpenseManager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class IncomeService implements IIncomeService{

    @Autowired
    IncomeRepository incomeRepository;

    @Autowired
    IncomeCategoryService incomeCategoryService;

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


    public List<IncomeJSON> allIncomeJSON(){
        List<Income> incomes =  incomeRepository.findAll();
        List<IncomeJSON> incomeJSONS = new ArrayList<>();

        for (Income i : incomes) {
            String category = incomeCategoryService.findCategoryById(i.getCategory_id()).getCategory_name();
            IncomeJSON incomeJSON = new IncomeJSON(i.getId(),category,i.getAmount(),i.getDescription(),i.getDate());
            incomeJSONS.add(incomeJSON);
        }
        return incomeJSONS;
    }
}
