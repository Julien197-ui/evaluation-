let username = localStorage.getItem("username");
var identifiant = document.getElementById("identifiant");
var date = document.getElementById("date");
var heure = document.getElementById("heure");
identifiant.appendChild(document.createTextNode(username));
var dayDate = new Date()
date.appendChild(document.createTextNode(dayDate.toLocaleDateString()));
heure.appendChild(document.createTextNode(dayDate.toLocaleTimeString()));