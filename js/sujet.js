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


var title = localStorage.getItem("title");
var titre = document.getElementById("titre");
titre.appendChild(document.createTextNode(title));
var names = localStorage.getItem("username");
var surName = localStorage.getItem("prénom");
var nom = document.getElementById("nom");
nom.appendChild(document.createTextNode(names));
var prenom = document.getElementById("prenom");
prenom.appendChild(document.createTextNode(surName));
var date = document.getElementById("date");
var heure = document.getElementById("heure");
var dayDate = new Date();
date.appendChild(document.createTextNode(dayDate.toLocaleDateString()));
heure.appendChild(document.createTextNode(dayDate.toLocaleTimeString()));
var commentEl = document.getElementById("commentaire");
var envoyer = document.getElementById("envoyer");
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
const checkComment = () => {
    let valid = false;
    const comment = commentEl.value.trim();
    if (!isRequired(comment)) {
        showError(commentEl, 'Le champ ne peut être vide');
    } else {
        showSuccess(commentEl);
        valid = true;
    }
    return valid;
}

envoyer.addEventListener('click',function(e){ 
    let isCommentValid = checkComment();
// Soumettre le formulaire 
    if (isCommentValid == false) {
        e.preventDefault();
        alert("La création du nouveau sujet a echoué")
    } else {
        //alert("Le sujet a été créé");
        let br = document.createElement("br");
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        let span3 = document.createElement("span");
        let span4 = document.createElement("span");
        let row = commentaires.insertRow();
        let cell1 = row.insertCell();
        cell1.setAttribute("id", "texte")
        cell1.appendChild(document.createTextNode(commentEl.value))
        let cell2 = row.insertCell();
        cell2.classList.add("right");
        cell2.appendChild(span1);
        span1.setAttribute("id", "prenom");
        cell2.appendChild(span2);
        span2.setAttribute("id", "nom");
        cell2.classList.add("right");
        cell2.appendChild(br)
        cell2.appendChild(document.createTextNode("envoyer le :"));
        cell2.appendChild(span3);
        cell2.classList.add("right");
        span3.setAttribute("id", "date");
        cell2.appendChild(document.createTextNode(" à "));
        cell2.appendChild(span4);
        span4.setAttribute("id", "heure");
        var dayDate = new Date();
        span3.appendChild(document.createTextNode(dayDate.toLocaleDateString()));
        span4.appendChild(document.createTextNode(dayDate.toLocaleTimeString()));
        var names = localStorage.getItem("username");
        var surName = localStorage.getItem("prénom");
        span2.appendChild(document.createTextNode(names));
        span1.appendChild(document.createTextNode(surName));
        /*
        commentaires.appendChild(divC);
        divC.classList.add("newComment");
        divC.appendChild(text1);
        text1.setAttribute("id", "texte");
        text1.appendChild(document.createTextNode(commentEl.value))
        divC.appendChild(ulC);
        //noms
        ulC.appendChild(text2);
        
        text2.appendChild(span1);
        span1.setAttribute("id", "prenom");
        text2.classList.add("right");
        text2.appendChild(span2);
        span2.setAttribute("id", "nom");
        text3.classList.add("right");
        //date
        ulC.appendChild(text3);
        text3.appendChild(document.createTextNode("envoyer le :"));
        text3.appendChild(span3);
        text3.classList.add("right");
        span3.setAttribute("id", "date");
        text3.appendChild(document.createTextNode(" à "));
        text3.appendChild(span4);
        span4.setAttribute("id", "heure");
        var dayDate = new Date();
        span3.appendChild(document.createTextNode(dayDate.toLocaleDateString()));
        span4.appendChild(document.createTextNode(dayDate.toLocaleTimeString()));
        var names = localStorage.getItem("username");
        var surName = localStorage.getItem("prénom");
        span2.appendChild(document.createTextNode(names));
        span1.appendChild(document.createTextNode(surName)); */
}
    });