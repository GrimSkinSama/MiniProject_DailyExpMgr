package miniproject.bca.co.id.DailyExpenseManager.controller;

import miniproject.bca.co.id.DailyExpenseManager.model.ExpenseCategory;
import miniproject.bca.co.id.DailyExpenseManager.repository.ExpenseCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("expenseCategory")
public class ExpenseCategoryController {

    @Autowired
    ExpenseCategoryRepository expenseCategoryRepository;

    @GetMapping("/expenseCategories")
    public List<ExpenseCategory> findAll(){
        return expenseCategoryRepository.findAll();
    }

    @GetMapping("/expenseCategory/{id}")
    public ExpenseCategory findById(@PathVariable("id") int id){
        return expenseCategoryRepository.findExpenseCategoryById(id);
    }

    @PostMapping("/addExpenseCategory")
    public ExpenseCategory addExpenseCategory(@RequestBody ExpenseCategory expCat){
        return expenseCategoryRepository.save(expCat);
    }

    @PutMapping("/updateExpenseCategory/{id}")
    public ExpenseCategory updateExpenseCategory(@RequestBody ExpenseCategory expCat, @PathVariable("id")int id){
        expCat.setId(id);
        return expenseCategoryRepository.save(expCat);
    }

    @DeleteMapping("/deleteExpenseCategory/{id}")
    public String deleteExpenseCategory(@PathVariable("id")int id){
        expenseCategoryRepository.deleteById(id);
        return "Data Expense Category (id :"+id+") Has Been Successfully Deleted!";
    }




}
