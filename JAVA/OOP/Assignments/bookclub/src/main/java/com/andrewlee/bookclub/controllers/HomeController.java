package com.andrewlee.bookclub.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.andrewlee.bookclub.models.Book;
import com.andrewlee.bookclub.models.User;
import com.andrewlee.bookclub.servs.BookServ;
import com.andrewlee.bookclub.servs.UserService;

@Controller
public class HomeController {

	@Autowired
	private BookServ bookServ;
	@Autowired
	private UserService userServ;

	//dashboard for all projects
	@GetMapping("/books")
	public String dashboard(Model model, HttpSession session) {
		if(session.getAttribute("user_id")==null) {
			return "redirect:/";
		}
		List<Book>books=bookServ.allBooks();
		model.addAttribute("books", books);
		Long userId=(Long)session.getAttribute("user_id");
		User user =userServ.findOneUser(userId);
		model.addAttribute("user", user);
		return "loggedin.jsp";
	}
	
	//new books
	@GetMapping("books/new")
	public String createBookForm(@ModelAttribute("newBook")Book book) {
		return "createBook.jsp";
	}
	
	@PostMapping("/books/new")
	public String createBookProcess(@Valid @ModelAttribute("newBook")Book newBook,
			BindingResult result,Model model, HttpSession session) {
		if(result.hasErrors()) {
			return "createBook.jsp";
		}
		
		
		bookServ.saveBook(newBook);
		return "redirect:/books";
	}
	
	@GetMapping("/books/{id}")
	public String showBook(Model model, HttpSession session,@PathVariable("id")Long id) {
		if(session.getAttribute("user_id")==null) {
			return "redirect:/";
		}
		model.addAttribute("book",bookServ.oneBook(id));
		
		return "showBook.jsp";
	}
	@GetMapping("/books/{id}/edit")
	public String editBook(Model model, HttpSession session,@PathVariable("id")Long id,@ModelAttribute("book")Book book) {
		Long userId=(Long)session.getAttribute("user_id");
		if(session.getAttribute("user_id")==null||bookServ.oneBook(id)==null||!userId.equals(bookServ.oneBook(id).getUser().getId())) {
			return "redirect:/books";
		}
		
		
		model.addAttribute("book",bookServ.oneBook(id));
		
		return "editBook.jsp";
	}
	
	@PostMapping("books/{id}/edit")
	public String updateBook(@Valid @ModelAttribute("book")Book book, BindingResult result, 
			Model model,HttpSession session,@PathVariable("id")Long id) {
	if (result.hasErrors()) {
        return "editBook.jsp";
    } else if(session.getAttribute("user_id")!=bookServ.oneBook(id).getUser().getId()&&bookServ.oneBook(id)!=null) {
    	
    	
    	return "redirect:/books";
    	
    }
	
	else {
        bookServ.updateBook(book);
        return "redirect:/books";
    }
	
}
	
	
}
