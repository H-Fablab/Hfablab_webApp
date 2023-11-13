const uri = window.location.origin



const accountInfosForm = document.getElementById("accountInfosForm")
const country = document.getElementById("country")
const address = document.getElementById("address")
const phoneNumber = document.getElementById("phoneNumber")
const email = document.getElementById("email")
const password = document.getElementById("password")
const newpassword = document.getElementById("newpassword")
const renewpassword = document.getElementById("renewpassword")

accountInfosForm?.addEventListener("submit", async e => {

    e.preventDefault()
    clearErrors()

    const submitButton = accountInfosForm.querySelector('input[type="submit"]');
    const originalButtonContent = submitButton.innerHTML;

    // Add the spinner
    submitButton.innerHTML = 'Envoyer<span class="form-loader"></span>';
    submitButton.disabled = true;

    const i = new Date()

    let formData = {
        birthDate: i
    }

    let hasError = false

    if (country.value.trim() !== '') {
        formData.country = country.value.trim()
    }
    if (address.value.trim() !== '') {
        formData.address = address.value.trim()
    }
    if (phoneNumber.value.trim() !== '') {
        formData.phoneNumber = phoneNumber.value.trim()
    }
    if (email.value.trim() !== '') {
        formData.email = email.value.trim()
    }
    if (password.value.trim() !== '') {
        formData.password = password.value.trim()
    }
    if (password.value.trim() !== '') {
        if (newpassword.value.trim() === '') {
            setError(newpassword, 'Veuillez remplir ce champ');
            hasError = true;
        }
        if (renewpassword.value.trim() === '') {
            setError(renewpassword, 'Veuillez remplir ce champ');
            hasError = true;
        }
        if (renewpassword.value.trim() === newpassword.value.trim()) {
            setError(renewpassword, 'les mots de passe ne correspondent pas!');
            hasError = true;
        }
    }
    if (password.value.trim() !== '') {
        formData.password = password.value.trim()
    }
    if (newpassword.value.trim() !== '') {
        formData.newpassword = newpassword.value.trim()
    }
    if (renewpassword.value.trim() !== '') {
        formData.renewpassword = renewpassword.value.trim()
    }

    if (hasError) {
        throw new Error('Please fill in all required fields.');
    }

    console.log(formData)

    const response = await fetch(`${uri}/updatesettings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (response.ok) {
        // Reset the form on success
        accountInfosForm.reset();
        showSuccessMessage()
    } else {
        showErrorMessage(accountInfosForm, "Une erreur est survenu!")
    }

    submitButton.innerHTML = originalButtonContent;
    submitButton.disabled = false;
})


const showErrorMessage = (element, message) => {
    const errorMessageHTML = `
    <div class="error-container">
      <p class="error-message">${message}</p>
    </div>
  `;
    element.insertAdjacentHTML('beforeend', errorMessageHTML);
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

    // Add an event listener for the "Ok" button to remove the message
    const okButton = document.getElementById('okButton');
    okButton.addEventListener('click', () => {
        const successMessage = document.querySelector('.submission--overlay');
        successMessage.remove();
        window.location.reload()
    });
};


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
