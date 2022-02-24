package com.andrewlee.bookclub.repos;


import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.andrewlee.bookclub.models.Book;

@Repository
public interface BookRepo extends CrudRepository<Book, Long> {
	List<Book> findAll();
	
}
