package com.andrewlee.webdemo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	@GetMapping("/")
	public String home() {
		return "home.jsp";
	}
	@GetMapping("/jstl")
	public String jstl() {
		return "jtsl.jsp";
	}
}
