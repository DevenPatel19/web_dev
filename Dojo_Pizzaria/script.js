// Objectives
// Practice making JavaScript objects
// Practice using Math.random()

// // define it all at once like the sandwich
// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);


// // define a function that allows us to craft a sandwich!
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

// The Pizza Oven
// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.
// function pizzaOven(crustType,sauceType,cheeses, toppings){
//     var pizza = {};
//     pizzaOven.crustType = crustType;
//     pizzaOven.sauceType = sauceType;
//     pizzaOven.cheeses = cheeses;
//     pizzaOven.toppings = toppings;
// }
// Create a function called pizzaOven that returns a JavaScript (Pizza) Object
function pizzaOven(crustType,sauceType,cheeses, toppings){
    var pizza = {};
    pizzaOven.crustType = crustType;
    pizzaOven.sauceType = sauceType;
    pizzaOven.cheeses = cheeses;
    pizzaOven.toppings = toppings;
    return pizza;
}


// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
var P1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"]);

// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
var P2 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["pepperoni","sausage"]);

// Create 2 more pizzas with any toppings we like!
var P3 = pizzaOven("hand tossed", "marinara", ["feta"], ["black olives","basil"]);
var P4 = pizzaOven("hand tossed", "marinara", ["mozzarella","parmesan"], ["banana peppers","pine apple"]);

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!


