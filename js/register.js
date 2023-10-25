//déclaration des variables
var usernameEl = document.querySelector('#username');
var surNameEl = document.querySelector('#surName');
var emailEl = document.querySelector('#email');
var passwordEl = document.querySelector('#password');
var confirmPasswordEl = document.querySelector('#confirm-password');
let form = document.getElementById("signup")
    //check required regex et minimum
    const isRequired = value => value === '' ? false : true;
    const isMinimum =(length,min)=>length<min  ?
    false : true;
    const isSurNameValid = (surName) => {
        const re = /^(?=.*[\d])/;
        return re.test(surName);
        };
    const isNameValid = (name) => {
        const re = /^(?=.*[\d])/;
        return re.test(name);
        };
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
            const checkUsername = () => {
                let valid = false;
                const min = 3;
                const username = usernameEl.value.trim();
                if (!isRequired(username)) {
                    showError(usernameEl, 'Le champ ne peut être vide');
                } else if (!isMinimum(username.length, min)) {
                    showError(usernameEl, `le nom doit avoir au moins ${min} caractères.`)
                } else if (isNameValid(username)) {
                    showError(usernameEl, "Le nom ne doit pas contenir de chiffres") 
                }
                  else {
                    showSuccess(usernameEl);
                    valid = true;
                }
                return valid;
        }
        const checkSurname = () => {
            let valid = false;
            const min = 3;
            const surname = surNameEl.value.trim();
        
            if (!isRequired(surname)) {
                showError(surNameEl, 'Le champ ne peut être vide');
            } else if (!isMinimum(surname.length, min)) {
                showError(surNameEl, `le prénom doit avoir au moins ${min} caractères.`)
            }
              else if (isSurNameValid(surname)) {
                showError(surNameEl, "Le prénom ne doit pas contenir de chiffres") 
            } else {
                showSuccess(surNameEl);
                valid = true;
            }
            return valid;
    }
        const checkEmail = () => {
            let valid = false;
            const email = emailEl.value.trim();
            if (!isRequired(email)) {
                showError(emailEl, 'le champ ne peut être vide');
            } else if (!isEmailValid(email)) {
                showError(emailEl, "L'adresse mail ne peut être valide")
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
                showError(passwordEl, 'le mot de passe ne peut être vide');
            } else if (!isPasswordSecure(password)) {
                showError(passwordEl, 'Le mot de passe doit avoir au moins 8 caractères, il doit comporter une minuscule,une majuscule, un chiffre et un caractère spécial parmi les suivants (#+-^[])');
            } else {
                showSuccess(passwordEl);
                valid = true;
            } return valid;
        };
        const checkConfirmPassword = () => {
            let valid = false;
            const confirmPassword = confirmPasswordEl.value.trim();
            const password = passwordEl.value.trim();
            if (!isRequired(confirmPassword)) {
                showError(confirmPasswordEl, 'Entrez votre mot de passe');
            } else if (password !== confirmPassword) {
                showError(confirmPasswordEl, "Votre mot de passe et la confirmation n'est pas bonne");
            } else {
                showSuccess(confirmPasswordEl); valid = true;
            } return valid;
        };
        // check si le formulaire est valide
        form.addEventListener('submit',function(e){ 
            let isUsernameValid = checkUsername();
            let isSurnameValid = checkSurname();
            let isEmailValid = checkEmail();
            let isPasswordValid = checkPassword();
            let isConfirmPasswordValid = checkConfirmPassword();
            let isFormValid = isUsernameValid &&
            isSurnameValid &&
            isEmailValid &&
            isPasswordValid &&
            isConfirmPasswordValid;
    // Soumettre le formulaire 
        if (isFormValid == false) {
            e.preventDefault();
            alert("L'envoie a échoué")
        } else {
            alert("Bravo l'envoie du formulaire a été effectué");
            localStorage.setItem("prénom",surNameEl.value);
            localStorage.setItem("identifiant",emailEl.value);
            localStorage.setItem("mdp",passwordEl.value);
            localStorage.setItem("username",usernameEl.value);
            window.open("login.html")
        }
            });