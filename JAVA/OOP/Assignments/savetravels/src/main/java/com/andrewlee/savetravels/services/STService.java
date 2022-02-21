package com.andrewlee.savetravels.services;




import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.andrewlee.savetravels.models.Expense;
import com.andrewlee.savetravels.repositories.ExpenseRepo;

@Service
public class STService {
	
	private final ExpenseRepo expenseRepo;
	
	public STService(ExpenseRepo expenseRepo) {
		this.expenseRepo = expenseRepo;
	}
	
	//FindAll
	public List<Expense> allExpenses() {
        return expenseRepo.findAll();
    }
    // creates an expense
    public Expense createExpense(Expense expense) {
        return expenseRepo.save(expense);
    }
	//ShowOne
	public Expense findExpense(Long id) {
		Optional<Expense>optionalExpense = expenseRepo.findById(id);
		if(optionalExpense.isPresent()) {
			return optionalExpense.get();
		}else {
			return null;
			
		}
		
	}
	//UpdateOne
	public Expense updateExpense(@Valid Expense expense) {
		return expenseRepo.save(expense);
		
	}
	//deleteOne
	public void deleteExpense(Long id) {
		expenseRepo.deleteById(id);
		
	}

}
