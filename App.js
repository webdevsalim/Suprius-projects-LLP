let val = document.querySelector("#mobile-menu")
let menu = document.querySelector(".nav")

val.addEventListener('click', function() {
    menu.style.right = "0px";
    val.style.visibility = "hidden";
});

let cross = document.querySelector(".nav");


cross.addEventListener('click', function() {
    menu.style.right = "-150px";
    val.style.visibility = "visible";
    
});

let year = document.querySelector("#year");

window.onload = function() {
    var d = new Date();
    var n = d.getFullYear();
    year.innerHTML = n;
}