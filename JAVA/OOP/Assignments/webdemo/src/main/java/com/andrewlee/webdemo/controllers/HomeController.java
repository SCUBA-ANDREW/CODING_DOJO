package com.andrewlee.webdemo.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.andrewlee.webdemo.models.Skill;

@Controller
public class HomeController {
	
	@GetMapping("/")
	public String home() {
		return "home.jsp";
	}
	@GetMapping("/jstl")
	public String jstl(Model model) {
		Integer age=13;
		Boolean alive=true;
		model.addAttribute("petname","Pepper");
		model.addAttribute("age",age);
		model.addAttribute("alive", alive);
		
		// LOOP
		ArrayList<String> pets = new ArrayList<>();
		pets.add("Pepper");
		pets.add("Charlie");
		pets.add("Gigi");
		pets.add("Penny");
		pets.add("Lulo");
		model.addAttribute("pets",pets);
		
		
		
		
		
		
		
		return "jtsl.jsp";
	}
	
	@GetMapping("/skills")
	public String jstlSkill() {
		ArrayList<Skill>skills=new ArrayList<Skill>();
		skills.add(new Skill("Debugging",22));
		skills.add(new Skill("Remove pineapple on a pizza",100));
		skills.add(new Skill("Answering Heidi",-5));
		skills.add(new Skill("Java Skill",100));
		skills.add(new Skill("Picking up Pepper",-10));
		
		
		return "skilltable.jsp";
	}
}
