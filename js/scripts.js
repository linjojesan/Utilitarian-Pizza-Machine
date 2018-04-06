
  // Business logic

// Object to store Pizza Order
function PizzaDetails(pizzaSize,pizzaSauce,pizzaToppings,pizzaCheeses) {
    this.pizzaSize = pizzaSize;
    this.pizzaSauce = pizzaSauce;
    this.pizzaToppings = pizzaToppings;
    this.pizzaCheeses = pizzaCheeses;
  }

  // object to store pizza total
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


  var whatSauce = parseFloat($("select#user-sauce").val())
  var whatSize = parseFloat($("select#user-size").val())
  var whatTopping = $("select#user-toppings").val()
  var whatCheese = $("select#user-cheeses").val()
    });

  // variables for order cost
  var newPizzaTotal = new PizzaTotal(whatSize, whatSauce, whatTopping, whatCheese)
  var sauceText = $("select#user-sauce option:selected").text();
  var sizeText = $("select#user-size option:selected").text();
  var toppingText = $("select#user-toppings option:selected").text();
  var CheeseText = $("select#user-cheeses option:selected").text();




});
});
