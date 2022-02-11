package com.andrewlee.zookeeper;

public class Mammal {
	protected int energyLevel;
	public Mammal() {
		this.energyLevel=100;
	}
	public int getEnergyLevel() {
		return energyLevel;
	}

	public void setEnergyLevel(int energyLevel) {
		this.energyLevel = energyLevel;
	}

	
	public int displayEnergy() {
		System.out.println("Current Energy Level: "+this.energyLevel);
		return this.energyLevel;
	}
	

}
