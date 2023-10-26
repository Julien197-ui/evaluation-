var titreEl = document.getElementById("titre");
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

test.addEventListener('click',function(e){ 
    let isTitleValid = checkTitle();
// Soumettre le formulaire 
    if (isTitleValid == false) {
        e.preventDefault();
        alert("La création du nouveau sujet a echoué")
    } else {
        //alert("Le sujet a été créé");
        localStorage.setItem("title",titreEl.value);
        var identifiant = localStorage.getItem("username");
        var prenom = localStorage.getItem("prénom");
        var table = document.getElementById("table");
        var link = document.createElement("a");
    let row = table.insertRow();
    let cell1 = row.insertCell();
    cell1.appendChild(link);
    link.setAttribute("href", "../html/sujet.html");
    link.appendChild(document.createTextNode(titreEl.value));
    let cell2 = row.insertCell();
    cell2.appendChild(document.createTextNode(new Date().toLocaleDateString()));
    let cell3 = row.insertCell();
    cell3.appendChild(document.createTextNode(prenom+ " "+identifiant));
}
    });