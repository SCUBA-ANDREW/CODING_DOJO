// Objectives
// Practice making JavaScript objects
// Practice using Math.random()

// A Sandwich Factory
// In this assignment we'll be making pizzas in JavaScript! And if we're going to just make one pizza we can define it all at once like the sandwich we see below.
// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);
// // But what if we wanted to make multiple sandwiches? We could define a function that allows us to craft a sandwich!

// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);




// ASSIGNMENT STARTS HERE

// The Pizza Oven
// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;

    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
// console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// console.log(p2);

var p3 = pizzaOven("thin crust","marinara", "mozzarella", ["pepperoni"]);

var p4 = pizzaOven("thin crust","marinara", "feta", ["pepperoni"]);


// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!
var topping_list = ["Pepperoni",
    "Mushroom",
    "Extra cheese",
    "Sausage",
    "Onion",
    "Black olives",
    "Green pepper",
    "Fresh garlic",
    "Tomato",
    "Fresh basil"];

function random_topping(array){
    var select_topping = Math.floor(Math.random()*array.length);
    return array[select_topping];
}


var p_random = pizzaOven("thin crust","marinara", "mozzarella", random_topping(topping_list))
console.log(p_random);


