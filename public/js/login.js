const form = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const isValid = validateSignUpInputs();

    if (isValid) {
        form.submit(); // Submit the form if validation is successful
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const isValid = validateLogInInputs();

    if (isValid) {
        loginForm.submit(); // Submit the login form if validation is successful
    }
});

function validateSignUpInputs() {
    const fullname = document.getElementById('fullName');
    const email = document.getElementById('signupEmail');
    const password = document.getElementById('signupPassword');
    const passwordConfirmation = document.getElementById('signupPasswordConfirmation');

    let isValid = true;

    if (fullname.value.trim() === '') {
        setError(fullname, 'Veuillez remplir ce champ');
        isValid = false;
    }

    if (email.value.trim() === '') {
        setError(email, 'Veuillez remplir ce champ');
        isValid = false;
    }

    if (password.value.trim() === '') {
        setError(password, 'Veuillez remplir ce champ');
        isValid = false;
    } else if (password.value.trim().length < 8) {
        setError(password, 'Insérez au moins 8 caractères!');
        isValid = false;
    }

    if (passwordConfirmation.value.trim() === '') {
        setError(passwordConfirmation, 'Veuillez remplir ce champ');
        isValid = false;
    }

    if (password.value.trim() !== passwordConfirmation.value.trim()) {
        setError(passwordConfirmation, 'Les mots de passe ne correspondent pas.');
        isValid = false;
    }

    return isValid;
}

function validateLogInInputs() {
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    let isValid = true;

    if (loginEmail.value.trim() === '') {
        setError(loginEmail, 'Veuillez remplir ce champ');
        isValid = false;
    }

    if (loginPassword.value.trim() === '') {
        setError(loginPassword, 'Veuillez remplir ce champ');
        isValid = false;
    }

    return isValid;
}

function setError(element, message) {
    const errorDisplay = document.createElement('small');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('error');
    element.insertAdjacentElement('afterend', errorDisplay);
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((errorElement) => {
        errorElement.remove();
    });
}


// logoutLink.addEventListener('click', function (event) {
//     event.preventDefault();
//     fetch('/logout', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           // Handle the successful logout, e.g., redirect the user
//           window.location.href = '/'; // Redirect to a different page
//         } else {
//           // Handle the logout failure, e.g., display an error message
//           alert('Logout failed');
//         }
//       })
//       .catch((error) => {
//         // Handle network or other errors
//         alert('Network error');
//       });
//   });