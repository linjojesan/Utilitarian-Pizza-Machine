
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

  // prototype to calculate cost

  PizzaTotal.prototype.calculateCost = function() {
    var totalCost = (this.size) + (this.sauce) + (this.toppings) + (this.cheeses);
    return totalCost;
  }

// user logic

$(function() {
  $("form#pizza-style").submit(function(event) {
  event.preventDefault();

  // variables for user values, using map, and reduce to add values and return sum, instead af a for loop.
  // https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464
  var whatSauce = parseFloat($("select#user-sauce").val())
  var whatSize = parseFloat($("select#user-size").val())
  var whatTopping = $("select#user-toppings").val().map(parseFloat).reduce(function (sum,b) {
    return sum + b
  });
  var whatCheese = $("select#user-cheeses").val().map(parseFloat).reduce(function (sum,b) {
    return sum + b
  });

  // variables for order cost
  var newPizzaTotal = new PizzaTotal(whatSize, whatSauce, whatTopping, whatCheese)
  var sauceText = $("select#user-sauce option:selected").text();
  var sizeText = $("select#user-size option:selected").text();
  var toppingText = $("select#user-toppings option:selected").text();
  var CheeseText = $("select#user-cheeses option:selected").text();
  // variables for


  var newPizzaDetails = new PizzaDetails(sauceText, sizeText, toppingText, CheeseText)
  $("#order, #total").show();
  // calculates cost method on newPizzaTotal object
    $("#total-amount").text(newPizzaTotal.calculateCost().toFixed(2));
    // returns cost with object.values method
    $("#order-type").text(Object.values(newPizzaDetails).join(", "));
});
});
