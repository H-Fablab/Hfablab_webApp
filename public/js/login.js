const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const errorContainer = document.createElement('div');
errorContainer.classList.add('error-container');
const uri = window.location.origin
console.log(uri)

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors(); // Clear past error messages

    const submitButton = signupForm.querySelector('button[type="submit"]');
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
    if (document.querySelector(".error-container")) {
        document.querySelector(".error-container").remove()
    }
};

const showSuccessMessage = () => {
    const successMessageHTML = `
    <div class="submission--overlay">
      <div class="overlay-box">
        <span class="icon--box">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
        </span>
        <h4 class="result">Succès</h4>
        <p class="message">Votre message a été envoyé avec succès</p>
        <a class="btn btn--primary" id="okButton">Ok</a>
      </div>
    </div>
  `;

    document.body.insertAdjacentHTML('beforeend', successMessageHTML);

    // Reset the form on success
    signupForm.reset();

    // Add an event listener for the "Ok" button to remove the message
    const okButton = document.getElementById('okButton');
    okButton.addEventListener('click', () => {
        const successMessage = document.querySelector('.submission--overlay');
        successMessage.remove();
    });
};

const showErrorMessage = (element, message) => {
    const errorMessageHTML = `
    <div class="error-container">
      <p class="error-message">${message}</p>
    </div>
  `;
    element.insertAdjacentHTML('beforeend', errorMessageHTML);
};

const validateSignUpInputs = async () => {
    const fullName = document.getElementById('fullName');
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');
    const passwordConfirmation = document.getElementById('passwordConfirmation');

    let hasError = false; // Track if there are any errors

    if (fullName.value.trim() === '') {
        setError(fullName, 'Veuillez remplir ce champ');
        hasError = true;
    }

    if (signupEmail.value.trim() === '') {
        setError(signupEmail, 'Veuillez remplir ce champ');
        hasError = true;
    }

    if (signupPassword.value.trim() === '') {
        setError(signupPassword, 'Veuillez remplir ce champ');
        hasError = true;
    }

    if (signupPassword.value.length < 8) {
        setError(signupPassword, 'Veuillez insérer au moins 8 caractères!');
        hasError = true;
    }

    if (passwordConfirmation.value.trim() === '') {
        setError(passwordConfirmation, 'Veuillez remplir ce champ');
        hasError = true;
    }

    if (passwordConfirmation.value.trim() !== signupPassword.value.trim()) {
        setError(passwordConfirmation, 'Les mots de passe ne correspondent pas !');
        hasError = true;
    }

    if (hasError) {
        throw new Error('Please fill in all required fields.');
    }

    try {
        const formData = {
            fullName: fullName.value.trim(),
            signupEmail: signupEmail.value.trim(),
            signupPassword: signupPassword.value.trim()
        };
        const response = await fetch(`${uri}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            window.location = "/mon-compte/dashboard"
            console.log('Message sent successfully');
        } else {
            showErrorMessage(signupForm, data.message || "Une erreur s'est produite, Merci de réssayer")
            throw new Error(error.message || 'Failed to send message');
        }
    } catch (error) {
        // showErrorMessage(signupForm, "Une erreur s'est produite, Merci de réssayer")
        throw new Error(error.message || 'Failed to send message');
    }
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

    try {
        const response = await fetch(`${uri}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            window.location = "/mon-compte/dashboard"
            console.log('Message sent successfully');
        } else {
            showErrorMessage(loginForm, data.message || "Une erreur s'est produite, Merci de réssayer")
            throw new Error(data.message || 'Failed to send message');
        }
    } catch (error) {
        // showErrorMessage(loginForm, data.message | "Une erreur s'est produite, Merci de réssayer")
        throw new Error(data.message || 'Failed to send message');
    }
};