package com.andrewlee.savetravels.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


import com.andrewlee.savetravels.models.Expense;
import com.andrewlee.savetravels.services.STService;

@Controller
public class STController {
	
	@Autowired
	private STService stService;
	
	
	
	@GetMapping("/expenses")
	public String mainPage(Model model, @ModelAttribute("expense") Expense expense) {
		List<Expense> expenses = stService.allExpenses();
		model.addAttribute("AllExpense",expenses);
		return "index.jsp";
	}
	
	
	//C

	//PROCESS THE CREATE FORM (POST)
	@PostMapping("/expenses")
	public String processCreate(
		@Valid @ModelAttribute("expense")Expense expense,
		BindingResult result, Model model
	    ) {
		if(result.hasErrors()) {
			List<Expense> expenses = stService.allExpenses();
			model.addAttribute("AllExpense",expenses);
			return "index.jsp";
		}
	    stService.createExpense(expense);
	    return"redirect:/expenses";
	   
	}
	
	
	
	//R
	
	//FindOne
	@RequestMapping("/expenses/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
		Expense expense = stService.findExpense(id);
		model.addAttribute("expense",expense);
        return "show.jsp";
    }
	
	
	
	//U
	@RequestMapping("/expenses/edit/{id}")
    public String edit(@PathVariable("id") Long id, Model model) {
        Expense expense = stService.findExpense(id);
        model.addAttribute("expense", expense);
        return "edit.jsp";
    }
    
    @RequestMapping(value="/expenses/{id}/update", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            stService.updateExpense(expense);
            return "redirect:/expenses";
        }
    }
    
    
    //D
    @RequestMapping(value="/expenses/{id}/delete", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
        stService.deleteExpense(id);
        return "redirect:/expenses";
    }
	
}
