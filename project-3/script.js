let base = document.getElementById("base")

let banana = document.getElementById("banana");
let basearray = ["images/banana.PNG", "images/neopolitan.PNG", "images/greensoda.PNG", "images/bluesoda.PNG", "images/shortcake.PNG", "images/stripe.PNG", "images/cone.PNG", "images/taiyaki.PNG"];

function changeBase() {
    console.log(base.value);
    banana.src = basearray[base.value];
}


let icecream = document.getElementById("icecream")

let vanilla = document.getElementById("vanilla");
let icearray = ["images/vanilla.PNG", "images/cherry.PNG", "images/softserve.PNG", "images/mixsoftserve.PNG", "images/kakigori.PNG", "images/flan.PNG", "images/jello.PNG", "images/pop.PNG"];

function changeIce() {
    console.log(icecream.value);
    vanilla.src = icearray[icecream.value];
}


let topping = document.getElementById("topping")

let sprinkles = document.getElementById("sprinkles");
let toparray = ["images/sprinkles.PNG", "images/chocoflakes.PNG", "images/nuts.PNG", "images/gummies.PNG", "images/creamcherry.PNG", "images/redbean.PNG", "images/mochi.PNG", "images/fish.PNG"];

function changeTop() {
    console.log(topping.value);
    sprinkles.src = toparray[topping.value];
}


let biscuit = document.getElementById("biscuit")

let rbiscuit = document.getElementById("rbiscuit");
let bisarray = ["images/rbiscuit.PNG", "images/cbiscuit.PNG", "images/choco.PNG", "images/pirouette.PNG", "images/conechip.PNG", "images/oreo.PNG", "images/pretzels.PNG", "images/cookie.PNG"];

function changeBis() {
    console.log(biscuit.value);
    rbiscuit.src = bisarray[biscuit.value];
}


let fruit = document.getElementById("fruit")

let strawberry = document.getElementById("strawberry");
let fruarray = ["images/strawberry.PNG", "images/grape.PNG", "images/melon.PNG", "images/cherryfruit.PNG", "images/mango.PNG", "images/peach.PNG", "images/bananafruit.PNG", "images/raspberry.PNG"];

function changeFru() {
    console.log(fruit.value);
    strawberry.src = fruarray[fruit.value];
}