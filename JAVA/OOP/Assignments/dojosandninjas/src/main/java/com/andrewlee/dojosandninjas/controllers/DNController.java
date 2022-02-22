package com.andrewlee.dojosandninjas.controllers;


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

import com.andrewlee.dojosandninjas.models.Dojo;
import com.andrewlee.dojosandninjas.models.Ninja;
import com.andrewlee.dojosandninjas.services.DNService;



@Controller
public class DNController {
	
	@Autowired
	private DNService dnService;
	
//create a dojo
	@GetMapping("/dojos/new")
	public String createDojoForm(@ModelAttribute("dojo")Dojo dojo) {
		return "newdojo.jsp";
	}
	
	@PostMapping("/dojos/new")
	public String createDojoProcess(@Valid @ModelAttribute("dojo")Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "newdojo.jsp";
		
		}
		dnService.saveDojo(dojo);
		return "redirect:/dojos/new";
		
	}
	
	
	
	@GetMapping("/ninjas/new")
	public String createNinjaForm(@ModelAttribute("ninja")Ninja ninja, Model model) {
		List<Dojo> dojo = dnService.allDojos();
		model.addAttribute("dojos",dojo);
		return "newninja.jsp";
	}
	
	@PostMapping("/ninjas/new")
	public String createNinjaProcess(@Valid @ModelAttribute("ninja")Ninja ninja, BindingResult result) {
		if(result.hasErrors()) {
			return "newninja.jsp";
		
		}
		dnService.saveNinja(ninja);
		return "redirect:/ninjas/new";
		
	}
	
	
	@GetMapping("/dojos/{id}")
	public String showAll(Model model, @PathVariable("id")Long id) {
		model.addAttribute("dojo", dnService.idDojo(id));
		
		return "index.jsp";
	}
	
	

}
