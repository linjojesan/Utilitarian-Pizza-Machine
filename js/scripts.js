
  // Business logic

// Objects for pizz details adn pizza

  function PizzaDetails(pizzaSize,pizzaSauce,pizzaToppings,pizzaCheeses) {
    this.pizzaSize = pizzaSize;
    this.pizzaSauce = pizzaSauce;
    this.pizzaToppings = pizzaToppings;
    this.pizzaCheeses = pizzaCheeses;
  }

  function PizzaTotal(size,sauce,toppings,cheeses) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.cheeses = cheeses;
}


  // prototype of Pizzatotal which adds the parameters of the function pizza total and returns the total cost

  PizzaTotal.prototype.calculateCost = function() {
    var totalCost = (this.size) + (this.sauce) + (this.toppings) + (this.cheeses);
    return totalCost;
  }

// user logic

$(function() {
  $("form#pizza-style").submit(function(event) {
  event.preventDefault();

  // variables for user values, using map, and reduce to add values and return sum, instead af a for loop.
  // https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464
  var whatSauce = parseFloat($("select#user-sauce").val())
  var whatSize = parseFloat($("select#user-size").val())
  var whatTopping = $("select#user-toppings").val().map(parseFloat).reduce(function (toppingCombo,toppingTotal) {
    return toppingCombo + toppingTotal;
  });
  var whatCheese = $("select#user-cheeses").val().map(parseFloat).reduce(function (cheeseCombo,cheeseTotal) {
    return cheeseCombo + cheeseTotal;
  });

  // newPizzaTotal object has four parameters whatSize, whatSauce, WhatTopping, whatCheese and outputs the pizza order.
  var newPizzaTotal = new PizzaTotal(whatSize, whatSauce, whatTopping, whatCheese)
  var sizeText = $("select#user-sauce option:selected").text();
  var sauceText = $("select#user-size option:selected").text();
  var toppingText = $("select#user-toppings option:selected").text();
  var CheeseText = $("select#user-cheeses option:selected").text();
  // variables for


  var newPizzaDetails = new PizzaDetails(sauceText, sizeText, toppingText, CheeseText)
  $("#order, #total").show();
  // text's total amount of the pizza, by using calculateCost function
    $("#total-amount").text(newPizzaTotal.calculateCost().toFixed(2));
    // returns cost with object.values method
    $("#order-type").text(Object.values(newPizzaDetails).join(", "));
});
});
