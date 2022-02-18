package com.andrewlee.omikujiform.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class HomeController {

	@GetMapping("/omikuji")
	public String index(Model model) {
		return "index.jsp";
	}

	@RequestMapping(value="/submit", method=RequestMethod.POST)
	public String submit(
			@RequestParam("pickNumber") Integer pickNumber,
			@RequestParam("city") String city,
			@RequestParam("name") String name,
			@RequestParam("endeavor")String endeavor,
			@RequestParam("livingThing")String livingThing,
			@RequestParam("sayNice")String sayNice,
			HttpSession session,
			RedirectAttributes redirectAttributes
			) {
		
		
		session.setAttribute("pickNumber",pickNumber);
		session.setAttribute("city",city);
		session.setAttribute("name",name);
		session.setAttribute("endeavor",endeavor);
		session.setAttribute("livingThing",livingThing);
		session.setAttribute("sayNice",sayNice);
		
		return "redirect:/omikuji/show";
	}
	
	@GetMapping("/omikuji/show")
	public String show() {
		return "show.jsp";
	}
	
}
