package com.andrewlee.daikichiroutes.controllers;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@RequestMapping("/daikichi")
@RestController
public class APIController {
	//RequestMapping is defaulted as "Get" - C"R"UD
	@RequestMapping("") //auto import: command shift O
	public String index() {
		return "Welcome!";
	}
	
	@RequestMapping(value="/today", method=RequestMethod.GET)
	public String option2() {
		return "Today you will find luck in all your endeavors!";
	}
	
	//option3: GetMapping/PostMapping/PutMapping/DeleteMapping
	@GetMapping("/tomorrow")
	public String option3() {
		
		return "Tomorrow, an opportunity will arise. so be sure to be open to new ideas!";
	}
}
