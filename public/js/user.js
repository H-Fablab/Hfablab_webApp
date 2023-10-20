var body = document.body;
const form = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const errorContainer = document.createElement('div');
errorContainer.classList.add('error-container');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors(); // Clear past error messages

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonContent = submitButton.innerHTML;

    // Add the spinner
    submitButton.innerHTML = 'Envoyer<span class="form-loader"></span>';
    submitButton.disabled = true;

    try {
        await validateSignUpInputs();
    } catch (error) {

    } finally {
        submitButton.innerHTML = originalButtonContent;
        submitButton.disabled = false;
    }
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors(); // Clear past error messages

    const submitButton = loginForm.querySelector('button[type="submit"]');
    const originalButtonContent = submitButton.innerHTML;

    // Add the spinner
    submitButton.innerHTML = 'Envoyer<span class="form-loader"></span>';
    submitButton.disabled = true;

    try {
        await validateLogInInputs();
    } catch (error) {

    } finally {
        submitButton.innerHTML = originalButtonContent;
        submitButton.disabled = false;
    }
});

const setError = (element, message) => {
    const errorDisplay = document.createElement('small');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('error');
    element.insertAdjacentElement('afterend', errorDisplay);
};

const clearErrors = () => {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((errorElement) => {
        errorElement.remove();
    });
};

// const showSuccessMessage = () => {
//     const successMessageHTML = `
//     <div class="submission--overlay">
//       <div class="overlay-box">
//         <span class="icon--box">
//           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
//         </span>
//         <h4 class="result">Succès</h4>
//         <p class="message">Votre message a été envoyé avec succès</p>
//         <a class="btn btn--primary" id="okButton">Ok</a>
//       </div>
//     </div>
//   `;

//     document.body.insertAdjacentHTML('beforeend', successMessageHTML);
//     body.classList.toggle('noscroll', false)
//     // Reset the form on success
//     form.reset();

//     // Add an event listener for the "Ok" button to remove the message
//     const okButton = document.getElementById('okButton');
//     okButton.addEventListener('click', () => {
//         const successMessage = document.querySelector('.submission--overlay');
//         successMessage.remove();
//     });
// };

const showErrorMessage = (element, message) => {
    const errorMessageHTML = `
    <div class="error-container">
      <p class="error-message">${message}</p>
    </div>
  `;

    element.insertAdjacentHTML('beforeend', errorMessageHTML);
};

const validateSignUpInputs = async () => {
    const fullname = document.getElementById('fullName');
    const email = document.getElementById('signupEmail');
    const password = document.getElementById('signupPassword');
    const passwordConfirmation = document.getElementById('signupPasswordConfirmation');


    let hasError = false; // Track if there are any errors

    if (fullname.value.trim() === '') {
        setError(fullname, 'Veuillez remplir ce champ');
        hasError = true;
    }
    if (email.value.trim() === '') {
        setError(email, 'Veuillez remplir ce champ');
        hasError = true;
    }

    if (password.value.trim() === '') {
        setError(password, 'Veuillez remplir ce champ');
        hasError = true;
    }

    if (passwordConfirmation.value.trim() === '') {
        setError(passwordConfirmation, 'Veuillez remplir ce champ');
        hasError = true;
    }

    if (password.value.trim().length < 8) {
        setError(password, 'Inserez au moins 8 caractères!');
        hasError = true;
        return
    }

    if (password.value.trim() !== passwordConfirmation.value.trim()) {
        setError(passwordConfirmation, 'Les mots de passe ne correspondent pas.');
        hasError = true;
        return
    }

    if (hasError) {
        throw new Error('Please fill in all required fields.');
    }


    const formData = {
        fullName: fullname.value.trim(),
        email: email.value.trim(),
        password: password.value.trim()
    };
    const response = await fetch('http://localhost:9003/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
    if (data.status === 'Success') {

    } else {
        showErrorMessage(form, "Une erreur s'est produite, Merce de réssayer")
        throw new Error(data.message || 'Failed to send message');
    }

    localStorage.setItem("token", data.token) // save token locally
    window.location = "/mon-compte"
};

const validateLogInInputs = async () => {
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');

    let hasError = false; // Track if there are any errors

    if (email.value.trim() === '') {
        setError(email, 'Veuillez remplir ce champ');
        hasError = true;
    }

    if (password.value.trim() === '') {
        setError(password, 'Veuillez remplir ce champ');
        hasError = true;
    }

    if (hasError) {
        throw new Error('Please fill in all required fields.');
    }


    const formData = {
        email: email.value.trim(),
        password: password.value.trim()
    };
    const response = await fetch('http://localhost:9003/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
    if (data.status === 'Success') {

    } else {
        showErrorMessage(loginForm, "Une erreur s'est produite, Merce de réssayer")
        throw new Error(data.message || 'Failed to send message');
    }

    localStorage.setItem("token", data.token) // save token locally
    window.location = "/mon-compte"
};