
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












// user logic

$(function() {
  event.preventDefault();
  var whatSauce = parseFloat($("select#user-sauce").val())
  var whatSize = parseFloat($("select#user-size").val())
  var whatTopping = $("select#user-toppings").val()
});
