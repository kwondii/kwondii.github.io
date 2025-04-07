let rangeInput = document.getElementById("range-input")

let contain = document.getElementById("bluecup");
let containers = ["images/bluecup.PNG", "images/cone.PNG", "images/greencup.PNG", "images/purplecup.PNG", "images/redcup.PNG", "images/stripecup.PNG", "images/yellowcup.PNG"];
let randomContainers = Math.floor(Math.random() * containers.length);
contain.src = containers[randomContainers];