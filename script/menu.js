var pizza = document.getElementById("pizza");
var donut = document.getElementById("donut");
var bread = document.getElementById("bread");

var pizzaCard = document.getElementById("pizza-card");
var donutCard = document.getElementById("donut-card");
var breadCard = document.getElementById("bread-card");

function pizza() {

    if (pizza.style.backgroundColor = "#796255") {
        donut.style.backgroundColor = "#9D8679"
        donutCard.style.display = "none";
    } else {
        pizza.style.backgroundColor = "#9D8679"
    }
}

function donut() {
    if (donut.style.backgroundColor = "#796255") {
        pizza.style.backgroundColor = "#9D8679"
        pizzaCard.style.display = "none";
    } else {
        donut.style.backgroundColor = "#9D8679"
    }
}



