package com.andrewlee.zookeeper;

public class Bat extends Mammal{
	public Bat() {
		super();
		this.setEnergyLevel(300);
	}
	public void fly() {
		System.out.println("Flying and felt tired");
		this.setEnergyLevel(this.getEnergyLevel()-50);
	}
	public void eatHuman() {
		System.out.println("Ate a human and felt good");
		this.setEnergyLevel(this.getEnergyLevel()+25);
		
	}
	public void attackTown() {
		System.out.println("whooooosh");
		this.setEnergyLevel(this.getEnergyLevel()-100);
	}
}
