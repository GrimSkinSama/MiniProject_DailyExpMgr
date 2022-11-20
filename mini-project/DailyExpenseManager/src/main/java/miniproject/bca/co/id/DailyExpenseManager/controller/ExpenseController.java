package miniproject.bca.co.id.DailyExpenseManager.controller;

import miniproject.bca.co.id.DailyExpenseManager.model.Expense;
import miniproject.bca.co.id.DailyExpenseManager.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("expense")
public class ExpenseController {

    @Autowired
    ExpenseRepository expenseRepository;

    @GetMapping("/expenses")
    public List<Expense> findAllExpenses(){
        return expenseRepository.findAll();
    }

    @GetMapping("/totalExpense")
    public Integer getExpenseTotal(){ return expenseRepository.getTotalExpense(); }

    @GetMapping("/expense/{id}")
    public Expense findById(@PathVariable("id") int id){
        return expenseRepository.findExpenseById(id);
    }

    @PostMapping("/addExpense")
    public Expense addExpense(@RequestBody Expense expense){
        return expenseRepository.save(expense);
    }

    @PutMapping("/updateExpense/{id}")
    public Expense updateExpense(@RequestBody Expense expense,@PathVariable("id") int id){
        expense.setId(id);
        return expenseRepository.save(expense);
    }

    @DeleteMapping("/deleteExpense/{id}")
    public String deleteExpense(@PathVariable("id") int id){
        expenseRepository.deleteById(id);
        return "Data Expense (id : "+id+") Has Been Successfully Deleted!";
    }


}
