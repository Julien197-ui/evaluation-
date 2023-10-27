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