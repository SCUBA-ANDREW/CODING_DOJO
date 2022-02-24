package com.andrewlee.bookclub.servs;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andrewlee.bookclub.models.Book;
import com.andrewlee.bookclub.repos.BookRepo;

@Service
public class BookServ {
	@Autowired
	private BookRepo bookRepo;
	
	//find all
	public List<Book> allBooks(){
		return bookRepo.findAll();
	}
	
	
	//create books
		public Book saveBook(Book book) {
			return bookRepo.save(book);
		}
		
	//show one
		public Book oneBook(Long bookId) {
			Optional<Book> optionalBook = bookRepo.findById(bookId);
			if(optionalBook.isPresent()) {
				return optionalBook.get();
			}else {
				return null;
			}
		}
		
	//edit one
		public Book updateBook(Book book) {
			return bookRepo.save(book);
		}

		//deleteOne
		public void deleteExpense(Long id) {
			bookRepo.deleteById(id);
			
		}


		

}
