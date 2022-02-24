package com.andrewlee.loginandreg.repo;

import java.awt.print.Book;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepo extends CrudRepository<Book, Long> {
	List<Book> findAll();
}
