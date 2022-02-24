package com.andrewlee.bookclub.controllers;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.andrewlee.bookclub.models.LoginUser;
import com.andrewlee.bookclub.models.User;
import com.andrewlee.bookclub.servs.UserService;

@Controller
public class UserController {
	
	@Autowired
	private UserService userServ;
	
	
	//index for log & reg forms (2 forms - newUser, newLogin)
	@GetMapping("/")
	public String index(Model model, HttpSession session) {
		
		if(session.getAttribute("user_id")!=null) {
			return "redirect:/books";
		}else {
			
			model.addAttribute("newUser", new User());
			model.addAttribute("newLogin", new LoginUser());
			return "logreg.jsp";
			
		}
		
	}
	
	
	
	
	
	//login (post)
	@PostMapping("/login")
	public String register(@Valid @ModelAttribute("newLogin")LoginUser newLogin,
			BindingResult result,Model model, HttpSession session) {
		User user = userServ.login(newLogin, result);
		if(result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "logreg.jsp";
		}
		session.setAttribute("user_id", user.getId());
		session.setAttribute("userName", user.getUserName());
		return "redirect:/books";
	}
	
	
	
	
	//register (post)
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, 
			BindingResult result, HttpSession session, Model model) {
		userServ.register(newUser, result);
		if(result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "logreg.jsp";
		}
		session.setAttribute("user_id", newUser.getId());
		session.setAttribute("userName", newUser.getUserName());
		
		return "redirect:/books";
	}
	
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
}

