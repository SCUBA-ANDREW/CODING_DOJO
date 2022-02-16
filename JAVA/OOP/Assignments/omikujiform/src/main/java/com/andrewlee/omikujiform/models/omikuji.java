package com.andrewlee.omikujiform.models;

public class omikuji {

	
	private Integer pickNumber;
	private String city;
	private String name;
	private String endeavor;
	private String livingThing;
	private String sayNice;
	
	public omikuji() {
		
	}
	public omikuji(Integer pickNumber, String city, String name, String endeavor, String livingThing, String sayNice) {
		this.setPickNumber(pickNumber);
		this.city=city;
		this.name=name;
		this.endeavor=endeavor;
		this.livingThing=livingThing;
		this.sayNice=sayNice;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getEndeavor() {
		return endeavor;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setEndeavor(String endeavor) {
		this.endeavor = endeavor;
	}
	public String getLivingThing() {
		return livingThing;
	}
	public void setLivingThing(String livingThing) {
		this.livingThing = livingThing;
	}
	public String getSayNice() {
		return sayNice;
	}
	public void setSayNice(String sayNice) {
		this.sayNice = sayNice;
	}
	public Integer getPickNumber() {
		return pickNumber;
	}
	public void setPickNumber(Integer pickNumber) {
		this.pickNumber = pickNumber;
	}
	
}
