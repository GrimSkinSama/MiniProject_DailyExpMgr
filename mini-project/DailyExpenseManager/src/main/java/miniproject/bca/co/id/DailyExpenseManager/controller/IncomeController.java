package miniproject.bca.co.id.DailyExpenseManager.controller;

import miniproject.bca.co.id.DailyExpenseManager.model.Income;
import miniproject.bca.co.id.DailyExpenseManager.repository.IncomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("income")
public class IncomeController {

    @Autowired
    IncomeRepository incomeRepository;

    @GetMapping("/incomes")
    public List<Income> findAll(){return incomeRepository.findAll();}


    @GetMapping("income/{id}")
    public Income findById(@PathVariable("id") int id){ return incomeRepository.findIncomeById(id);}


    @GetMapping("/totalIncome")
    public Integer getIncomeTotal(){ return incomeRepository.getTotalIncome(); }


    @PostMapping("/addIncome")
    public Income addIncome(@RequestBody Income income){
        //Perlu ditambahkan validasi ketika data masih kosong, maka income_balance akan otomatis 0
        //Jika sudah ada data income, maka perlu mendapatkan value income dari id terakhir untuk di jumlahkan ke income_balance
        return incomeRepository.save(income);
    }

    @PutMapping("/updateIncome/{id}")
    public Income updateIncome(@RequestBody Income income, @PathVariable("id") int id){
        income.setId(id);

        //Perlu ada validasi ketika melakukan update sebuah income terutama pada "amount"
        //maka harus ada service yang meng-update seluruh field income_balance yang ID nya lebih besar dari ID data yang di update

        return incomeRepository.save(income);
    }


    @DeleteMapping("/deleteIncome/{id}")
    public String deleteIncome(@PathVariable("id") int id){

        /*Tambahan : Fitur untuk meng-update Balance dengan ID lebih besar dari ID data yang dihapus,
        Setelah data berhasil terhapus dari sistem*/

        incomeRepository.deleteById(id);
        return "Income (id : "+id+") Telah Berhasil Dihapus Dari Sistem";

    }


}
