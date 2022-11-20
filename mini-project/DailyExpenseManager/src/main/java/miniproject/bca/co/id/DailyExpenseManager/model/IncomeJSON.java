package miniproject.bca.co.id.DailyExpenseManager.model;

import javax.persistence.Entity;
import java.time.LocalDate;

public class IncomeJSON {
    private int id;
    private String category;
    private double amount;
    private String description;
    private LocalDate date;

    public IncomeJSON(int id, String category, double amount, String description, LocalDate date) {
        this.id = id;
        this.category = category;
        this.amount = amount;
        this.description = description;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
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
}
