package miniproject.bca.co.id.DailyExpenseManager.controller;


import miniproject.bca.co.id.DailyExpenseManager.model.Income;
import miniproject.bca.co.id.DailyExpenseManager.model.IncomeCategory;
import miniproject.bca.co.id.DailyExpenseManager.repository.IncomeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("incomeCategory")
public class IncomeCategoryController {

    @Autowired
    IncomeCategoryRepository incomeCategoryRepository;

    @GetMapping("/incomeCategories")
    public List<IncomeCategory> allIncomeCategories(){return incomeCategoryRepository.findAll();}

    @GetMapping("/incomeCategory/{id}")
    public IncomeCategory findById(@PathVariable("id") int id){
        return incomeCategoryRepository.findIncomeCategoryById(id);
    }

    @PostMapping("/addIncomeCategory")
    public IncomeCategory addIncomeCategory(@RequestBody IncomeCategory incCat){
        return incomeCategoryRepository.save(incCat);
    }

    @PutMapping("/updateIncomeCategory/{id}")
    public IncomeCategory updateIncomeCategory(@RequestBody IncomeCategory incCat,@PathVariable("id") int id){
        incCat.setId(id);
        return incomeCategoryRepository.save(incCat);
    }


    @DeleteMapping("deleteIncomeCategory/{id}")
    public String deleteIncomeCategory(@PathVariable("id") int id){
        incomeCategoryRepository.deleteById(id);
        return "Income Category (id : "+id+") Has Been Successfully Deleted";
    }



}
