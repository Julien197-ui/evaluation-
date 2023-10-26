
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
        let table = document.getElementById("table")
        let text1 = document.createElement("p");
        let text2 = document.createElement("p");
        let text3 = document.createElement("p");
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        let span3 = document.createElement("span");
        let span4 = document.createElement("span");
        let row = commentaires.insertRow();
        let cell1 = row.insertCell();
        cell1.appendChild(text1);
        text1.setAttribute("id", "texte")
        text1.appendChild(document.createTextNode(commentEl.value))
        let cell2 = row.insertCell();
        cell2.appendChild(text2);
        text2.appendChild(span1);
        span1.setAttribute("id", "prenom");
        text2.classList.add("right");
        text2.appendChild(span2);
        span2.setAttribute("id", "nom");
        text3.classList.add("right");
        cell2.appendChild(text3);
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