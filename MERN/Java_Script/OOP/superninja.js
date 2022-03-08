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

class Sensei extends Ninja{
    constructor(name){
        super(name,200);
            this.speed=10;
            this.strengh=10;
            this.wisdom=10;


        
    }

    speakWisdom(){
        this.drinkSake()
        console.log("what one programmer can do in one month, two programmers can do in two months.")
    }

}

    // example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
