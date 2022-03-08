class Ninja{

constructor(name, health){
    this.name=name;
    this.health=health;
    this.speed=3;
    this.strengh=3;
}

sayName(){
    console.log(this.name);
    return this;
}

showStats(){
    console.log(this.name+" has "+this.health+" health, speed is "+this.speed+" and strength is "+this.strengh);
    return this;
}

drinkSake(){
    this.health+=10;
    return this;
}

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
