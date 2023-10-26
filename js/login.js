//déclaration des variables et récupération du localstorage
var emailEl = document.querySelector('#email');
var passwordEl = document.querySelector('#password');
let form = document.getElementById("signup");
let mdp = localStorage.getItem("mdp");
let identifiant = localStorage.getItem("identifiant");
    //check required regex et minimum
    const isRequired = value => value === '' ? false : true;
    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
        return re.test(email);
        };
       
        const isPasswordSecure = (password) => {
            const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\#\+\-\^\[\]])(?=.{8,})/;
            return re.test(password);
            };
    // messages d'erreurs    
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
      //check des differents elements
        const checkEmail = () => {
            let valid = false;
            const email = emailEl.value.trim();
            if (!isRequired(email)) {
                showError(emailEl, 'le champ ne peut pas être vide');
            } else if (!isEmailValid(email)) {
                showError(emailEl, "L'adresse mail n'est pas valide")
            } else if (email != identifiant) {
                showError(emailEl, 'email non enregistrer veuillez créer un compte')
            } else {
                showSuccess(emailEl);
                valid = true;
            }
            return valid;
        };
        const checkPassword = () => {
            let valid = false;
            const password = passwordEl.value.trim();
            if (!isRequired(password)) {
                showError(passwordEl, 'le mot de passe ne peut pas être vide');
            } else if (!isPasswordSecure(password)) {
                showError(passwordEl, 'Le mot de passe doit avoir au moins 8 caractères, il doit comporter une minuscule,une majuscule, un chiffre et un caractère spécial parmi les suivants (#+-^[])');
            } else if (password != mdp) {
                showError(passwordEl, 'le mot de passe est incorrect');
            } else {
                showSuccess(passwordEl);
                valid = true;
            } return valid;
        };
      
        // check si le formulaire est valide
        form.addEventListener('submit',function(e){ 
            let isEmailValid = checkEmail();
            let isPasswordValid = checkPassword();
            let isFormValid = 
            isEmailValid &&
            isPasswordValid;
    // Soumettre le formulaire 
        if (isFormValid == false) {
            e.preventDefault();
            alert("L'envoie a échoué")
        } else {
            window.open("forum.html")
        }
            });