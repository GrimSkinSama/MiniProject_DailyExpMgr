package miniproject.bca.co.id.DailyExpenseManager.service;

import miniproject.bca.co.id.DailyExpenseManager.model.IncomeCategory;
import miniproject.bca.co.id.DailyExpenseManager.repository.IncomeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncomeCategoryService implements IIncomeCategoryService{

    @Autowired
    IncomeCategoryRepository incomeCategoryRepository;

    @Override
    public void insert(IncomeCategory incomeCategory) {

    }

    @Override
    public void update(IncomeCategory incomeCategory) {

    }

    @Override
    public void delete(IncomeCategory incomeCategory) {

    }

    @Override
    public IncomeCategory findTheIncome(IncomeCategory incomeCategory) {

        return null;
    }

    @Override
    public List<IncomeCategory> allIncome() {
        return null;
    }

    public IncomeCategory findCategoryById(Integer catId){
        System.out.println(catId);
        System.out.println(incomeCategoryRepository.findIncomeCategoryById(catId).getCategory_name());
        return incomeCategoryRepository.findIncomeCategoryById(catId);
    }
}
