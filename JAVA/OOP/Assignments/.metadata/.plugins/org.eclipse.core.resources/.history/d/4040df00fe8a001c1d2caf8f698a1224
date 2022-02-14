package com.andrewlee.routesdemo.controllers;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class APIController {
	//RequestMapping is defaulted as "Get" - C"R"UD
	@RequestMapping("/api") //auto import: command shift O
	public String index() {
		return "hello I am in API Controller";
	}
	
	@RequestMapping(value="/api/option2", method=RequestMethod.GET)
	public String option2() {
		return "option2 get";
	}
	
	//option3: GetMapping/PostMapping/PutMapping/DeleteMapping
	@GetMapping("/api/getMapping")
	public String option3() {
		Date d = new Date();
		return "get mapping";
	}
}
