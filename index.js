function submitForm(event) {
    event.preventDefault();
    
    //get values from html input elements
    const firstNameElement = document.querySelector('#firstName')
    const firstName = firstNameElement.value;
    const lastNameElement = document.querySelector('#lastName')
    const lastName = lastNameElement.value;
    const ageElement = document.querySelector('#age')
    const age = ageElement.value;
    const eighteenOrOlderElement = document.querySelector('#eighteenOrOlder')
    const eighteenOrOlder = eighteenOrOlderElement.value;
    const emailElement = document.querySelector('#email')
    const email = emailElement.value;
    const passwordElement = document.querySelector('#password')
    const password = passwordElement.value;
    const confirmPasswordElement = document.querySelector('#confirm-password')
    const confirmPassword = confirmPasswordElement.value;

    var isFormValid = true;


    
    //removes errors from list
    firstNameElement.classList.remove('error');
    ageElement.classList.remove('error');
    eighteenOrOlderElement.classList.remove('error');
    lastNameElement.classList.remove('error');
    emailElement.classList.remove('error');
    passwordElement.classList.remove('error');
    confirmPasswordElement.classList.remove('error');
    

    

    //validate all values
    if (firstName === '') {

        firstNameElement.classList.add('error')
        isFormValid = false;
    }

    const numberAge = Number(age); //convert string to number


    if (age === '' || isNaN(numberAge) || numberAge < 0) {
        
        ageElement.classList.add('error')
        isFormValid = false;

    }
    
    

    if (eighteenOrOlder === 'true' && numberAge < 18) {
        ageElement.classList.add('error');
        eighteenOrOlderElement.classList.add('error');
        isFormValid = false;

    }

    if (password === '' || confirmPassword === '') {
        passwordElement.classList.add('error');
        confirmPasswordElement.classList.add('error');
        isFormValid = false;
    }
    if (password.length < 8 || confirmPassword.length < 8) {
        passwordElement.classList.add('error');
        confirmPasswordElement.classList.add('error');
        isFormValid = false;
    }
    if (password !== confirmPassword) {
        passwordElement.classList.add('error');
        confirmPasswordElement.classList.add('error');
        isFormValid = false;
    }
    if (email === '') {
        emailElement.classList.add('error');
        isFormValid = false;
    }
    if (lastName === '') {
        lastNameElement.classList.add('error');
        isFormValid = false;
    }

    if(isFormValid) {
        alert('SUCCESS');
    }
    else {
        alert('FAILED');
    }

    // if form is valid, submit to server
    

    // if form not valid, show an error
}

