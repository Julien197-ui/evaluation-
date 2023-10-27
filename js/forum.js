window.addEventListener("load", function() {
let id = localStorage.getItem("connexion")
console.log(id);
if (id === null) {
    window.location = "../html/login.html"
    alert("veuillez vous connectez avant d'acceder au forum")
};
});
let deconnexion = document.getElementById("deconnexion")
deconnexion.addEventListener("click", function () {
    localStorage.removeItem("connexion")
    window.location = "../html/login.html"
})
let username = localStorage.getItem("username");
var identifiant = document.getElementById("identifiant");
var date = document.getElementById("date");
var heure = document.getElementById("heure");
identifiant.appendChild(document.createTextNode(username));
var dayDate = new Date()
date.appendChild(document.createTextNode(dayDate.toLocaleDateString()));
heure.appendChild(document.createTextNode(dayDate.toLocaleTimeString()));

let cat1 = document.getElementById("Cat1").innerHTML;
let cat1c = document.getElementById("Cat1c");
let cat2 = document.getElementById("Cat2").innerHTML;
let cat2c = document.getElementById("Cat2c");
let cat3 = document.getElementById("Cat3").innerHTML;
let cat3c = document.getElementById("Cat3c");
cat1c.addEventListener("click", function () {
    localStorage.setItem("cat", cat1);
});
cat2c.addEventListener("click", function () {
    localStorage.setItem("cat", cat2);
});
cat3c.addEventListener("click", function () {
    localStorage.setItem("cat", cat3);
});