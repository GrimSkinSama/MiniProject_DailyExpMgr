package miniproject.bca.co.id.DailyExpenseManager.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Table(name = "income")
public class Income {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

/*    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "income_category_id", referencedColumnName = "id")
    private IncomeCategory incomeCategory;*/

    @Column(name = "income_category_id")
    private int category_id;

    @Column(name = "amount")
    private double amount;

    @Column(name = "description")
    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "income_date")
    private LocalDate date;

//    @Column(name = "income_balance")
//    private double income_balance;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

//    public double getIncome_balance() {
//        return income_balance;
//    }
//
//    public void setIncome_balance(double income_balance) {
//        this.income_balance = income_balance;
//    }
}
