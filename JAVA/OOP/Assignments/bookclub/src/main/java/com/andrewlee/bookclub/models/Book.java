package com.andrewlee.bookclub.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotEmpty(message="Title is required!")
    private String title;
    @NotEmpty(message="Author Name is required!")
    private String authorName;
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
    
    @NotEmpty(message="Thoughts is required!")
    private String myThoughts;
    

	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;
    
    public Book() {
    	
    }
    public Book(Long id, @NotNull String title, @NotNull String authorName, Date createdAt,
    		Date updatedAt, @NotNull String myThoughts, User user) {
    	super();
    	this.id = id;
    	this.title = title;
    	this.authorName = authorName;

    	this.createdAt = createdAt;
    	this.updatedAt = updatedAt;
    	this.myThoughts = myThoughts;
    	this.user = user;
    }
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public Date getCreatedAt() {
		return createdAt;
	}


	public Date getUpdatedAt() {
		return updatedAt;
	}



	public String getMyThoughts() {
		return myThoughts;
	}
	public void setMyThoughts(String myThoughts) {
		this.myThoughts = myThoughts;
	}
	


	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getAuthorName() {
		return authorName;
	}
	
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	

	

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	public User getUser() {
		return user;
	}
	
	public void setUser(User userId) {
		this.user = userId;
	}
	
    
}
