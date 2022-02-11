package com.andrewlee.zookeeper;

public class Gorilla extends Mammal{
	public Gorilla() {
		super();
	}
	public void throwSomething() {
		System.out.println("You throw something to somewhere, and felt tired");
		this.energyLevel-=5;
	}
	public void eatBananas() {
		System.out.println("You ate a banana and felt better");
		this.setEnergyLevel(this.getEnergyLevel()+10);
	}
	public void climb() {
		System.out.println("You climbed a, and felt tired");
		this.setEnergyLevel(this.getEnergyLevel()-10);
	}
	
}
