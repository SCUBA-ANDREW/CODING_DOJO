class Card{
    constructor(name, cost){
        this.name=name;
        this.cost=cost;
    }
}


class Unit extends Card{
    constructor(name,cost, power, resilience){
        super(name,cost);
        this.power=power;
        this.resilience=resilience;
    }


    attack(target){
        if(target instanceof Unit){
            console.log(this.name+" attacked "+target.name);
            target.resilience-=this.power;
            console.log("target's stats:");
            console.log("name: "+target.name+" power: "+target.power+" resilience: "+target.resilience);
            console.log("*****attack complete*****");
            return this;
        }else{
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }
    play(target){
        if(target instanceof Unit){
            
            console.log(this.text+" - target is: "+target.name);
            if(this.stat=="resilience"){
                target.resilience+=this.magnitude;
            }else if(this.stat=="power"){
                target.power+=this.magnitude
            }

            console.log("target's current stats:");
            console.log("name: "+target.name+" power: "+target.power+" resilience: "+target.resilience);
            console.log("*****effect complete*****");
            return this;
        }else{
            throw new Error("Target must be a unit!");
        }
    }
    
}

const Red_Belt_Ninja=new Unit("red belt ninja",3,3,4);
const Black_Belt_Ninja=new Unit("black belt ninja",4,5,4);


const Hard_Algorithm=new Effect("hard algorithm",2,"increase target's resilience by 3","resilience",3);
const Unhandled_Promise_Rejection=new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
const Pair_Programming=new Effect("Pair Programming",3,"increase target's power by 2","power",2);


Hard_Algorithm.play(Red_Belt_Ninja);
Unhandled_Promise_Rejection.play(Red_Belt_Ninja);
Pair_Programming.play(Red_Belt_Ninja);
Red_Belt_Ninja.attack(Black_Belt_Ninja);
