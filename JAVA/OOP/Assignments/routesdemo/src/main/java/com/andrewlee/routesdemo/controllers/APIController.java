package com.andrewlee.routesdemo.controllers;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RequestMapping("/api") // add this line so every URL will start with localhost:8080/api
@RestController
public class APIController {
	//RequestMapping is defaulted as "Get" - C"R"UD
	@RequestMapping("") //auto import: command shift O
	public String index() {
		return "hello I am in API Controller";
	}
	
	@RequestMapping(value="/option2", method=RequestMethod.GET)
	public String option2() {
		return "option2 get";
	}
	
	//option3: GetMapping/PostMapping/PutMapping/DeleteMapping
	@GetMapping("/getMapping")
	public String option3() {
		Date d = new Date();
		return "get mapping";
	}
	
	@GetMapping("/pet")
	public String petDetails(@RequestParam("name") String name) { // RequestParam will make URL required to have ?name=/name/ 
		return name;
		//url be like localhost:8080/api/pet?name=pepper
	}
	@GetMapping("/optionalPet")
	public String petDetails2(@RequestParam(value="name", required=false)String name,@RequestParam(value="age",required=false)Integer age) {
		return name;
	}
}
