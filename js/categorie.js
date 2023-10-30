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



var catTitle = document.getElementById("title");
var cat = localStorage.getItem("cat");
catTitle.appendChild(document.createTextNode(cat));

var titreEl = document.getElementById("titre");
var commentaireEl = document.getElementById("commentaire")
let form = document.getElementById("form");
let test = document.getElementById("test");
let hidden = document.getElementById("hidden");
//afficher le menu pour ajouter un sujet
hidden.addEventListener("click", function () {
    var ajout = document.getElementById("newSujet");
    ajout.classList.toggle("add");
});
const isRequired = value => value === '' ? false : true;
const showError = (input, message) => {
        
    const formField = input.parentElement;
    
    formField.classList.remove('success');
    formField.classList.add('error');
    
    
    const error = formField.querySelector('small');
    error.textContent = message;
    };
const showSuccess = (input) => {
    const formField = input.parentElement;
      
    formField.classList.remove('error');
    formField.classList.add('success');
       
        
    const error = formField.querySelector('small');
    error.textContent = '';
        }   
const checkTitle = () => {
    let valid = false;
    const titre = titreEl.value.trim();
    if (!isRequired(titre)) {
        showError(titreEl, 'Le champ ne peut être vide');
    } else {
        showSuccess(titreEl);
        valid = true;
    }
    return valid;
}
const checkComment = () => {
    let valid = false;
    const commentaire = commentaireEl.value.trim();
    if (!isRequired(commentaire)) {
        showError(commentaireEl, 'Le champ ne peut être vide');
    } else {
        showSuccess(commentaireEl);
        valid = true;
    }
    return valid;
}

test.addEventListener('click',function(e){ 
    let isTitleValid = checkTitle();
    let isCommentValid = checkComment();
// Soumettre le formulaire 
    if (isTitleValid == false || isCommentValid == false) {
        e.preventDefault();
        alert("La création du nouveau sujet a echoué")
    } else {
        //alert("Le sujet a été créé");
        localStorage.setItem("title",titreEl.value);
        localStorage.setItem("comment",commentaireEl.value);
        var identifiant = localStorage.getItem("username");
        var prenom = localStorage.getItem("prénom");
        var table = document.getElementById("table");
        var link = document.createElement("p");
        var lien = document.createElement("input");
        var span = document.createElement("span");
    let row = table.insertRow();
    let cell1 = row.insertCell();
    cell1.appendChild(link);
    link.appendChild(document.createTextNode(titreEl.value));
    link.classList.add("decoration")
    cell1.classList.add("displayBorder");
    let cell2 = row.insertCell();
    cell2.appendChild(document.createTextNode(new Date().toLocaleDateString()));
    cell2.classList.add("displayBorder");
    let cell3 = row.insertCell();
    cell3.appendChild(document.createTextNode(prenom+ " "+identifiant));
    cell3.classList.add("displayBorder");
    let row2 = table.insertRow();
    
    row.classList.add("size");
    let cell4 = row2.insertCell();
    let cell6 = row2.insertCell();
    //let cell4 = document.createElement("p");
    //row2.appendChild(cell4);
    cell4.appendChild(document.createTextNode(commentaireEl.value))
    row2.classList.add("hidden");
    row2.classList.add("hiddenBorder");
    cell4.classList.add("retricitus")
    cell4.classList.add("displayBorder");
    cell4.classList.add("displayBorder");
    cell4.classList.add("comment");
    cell6.classList.add("displayBorder");
    cell6.appendChild(span);
    var sujet =  document.createElement("a");
    sujet.setAttribute("href", "../html/sujet.html");
    span.appendChild(sujet);
    lien.setAttribute("type", "button");
    lien.setAttribute("value", "voir la discussion");
    lien.classList.add("inputs2");
    sujet.appendChild(lien);
    link.addEventListener("click", function () {
        row2.classList.toggle("hidden");
    })
    titreEl.value = "";
    commentaireEl.value = "";
}
    });