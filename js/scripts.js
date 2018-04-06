
  // Business logic

// Objects for pizz details adn pizza
function Pizza(pizzaSize,pizzaSauce,pizzaToppings,pizzaCheeses) {
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







.map(parseFloat)


// user logic

$(function() {
  event.preventDefault();
  var whatSauce = parseFloat($("select#user-sauce").val())
  var whatSize = parseFloat($("select#user-size").val())
  var whatTopping = $("select#user-toppings").val()
  var whatCheese = $("select#user-cheeses").val().map(parseFloat)

  var sauceText = $("select#user-sauce option:selected").text();
  var sizeText = $("select#user-size option:selected").text();
  var toppingText = $("select#user-toppings option:selected").text();

});
