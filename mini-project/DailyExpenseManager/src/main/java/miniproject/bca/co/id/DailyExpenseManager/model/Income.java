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
    private int income_category_id;

    @Column(name = "amount")
    private double amount;

    @Column(name = "description")
    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "income_date")
    private LocalDate income_date;

    @Column(name = "income_balance")
    private double income_balance;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIncome_category_id() {
        return income_category_id;
    }

    public void setIncome_category_id(int income_category_id) {
        this.income_category_id = income_category_id;
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

    public LocalDate getIncome_date() {
        return income_date;
    }

    public void setIncome_date(LocalDate income_date) {
        this.income_date = income_date;
    }

    public double getIncome_balance() {
        return income_balance;
    }

    public void setIncome_balance(double income_balance) {
        this.income_balance = income_balance;
    }
}
