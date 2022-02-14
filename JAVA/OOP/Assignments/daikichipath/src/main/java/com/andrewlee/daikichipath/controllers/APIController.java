package com.andrewlee.daikichipath.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RequestMapping("/daikichi")
@RestController
public class APIController {
	//RequestMapping is defaulted as "Get" - C"R"UD
	@RequestMapping("") //auto import: command shift O
	public String index() {
		return "Welcome!";
	}
	
	@RequestMapping("/travel/{place}")
	public String travel(@PathVariable("place") String place) {
		return "Congratualations! You will soon travel to "+place;
	}
	
	//option3: GetMapping/PostMapping/PutMapping/DeleteMapping
	@GetMapping("/lotto/{number}")
	public String lotto(@PathVariable("number") Integer number) {
		if(number%2==1) {
			return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";			
		}
		else {
			return "You will take a grand journey in the near future, but be weary of tempting offers";
		}
	}
}
