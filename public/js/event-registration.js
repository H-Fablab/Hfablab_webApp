const form = document.getElementById('formEvent');
const errorContainer = document.createElement('div');
errorContainer.classList.add('error-container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearErrors(); // Clear past error messages

  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonContent = submitButton.innerHTML;

  // Add a loading spinner while processing
  submitButton.innerHTML = 'Envoyer<span class="form-loader"></span>';
  submitButton.disabled = true;

  try {
    await validateInputs();
  } catch (error) {
    showErrorMessage(error.message);
  } finally {
    // Restore the original button content and re-enable the button
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
  form.reset();

  // Add an event listener for the "Ok" button to remove the message
  const okButton = document.getElementById('okButton');
  okButton.addEventListener('click', () => {
    const successMessage = document.querySelector('.submission--overlay');
    successMessage.remove();
  });
};

const showErrorMessage = (message) => {
  const errorMessageHTML = `
    <div class="error-container">
      <p class="error-message">${message}</p>
    </div>
  `;

  form.insertAdjacentHTML('beforeend', errorMessageHTML);
};

function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

const validateInputs = async () => {
  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const phoneNumber = document.getElementById('phoneNumber');

  let hasError = false; // Track if there are any errors

  if (fullName.value.trim() === '') {
    setError(fullName, 'Veuillez remplir ce champ');
    hasError = true;
  }

  if (email.value.trim() === '' || !validateEmail(email.value.trim())) {
    setError(email, 'Veuillez remplir un email valide');
    hasError = true;
  }

  if (phoneNumber.value.trim() === '') {
    setError(phoneNumber, 'Veuillez remplir ce champ');
    hasError = true;
  }

  if (hasError) {
    throw new Error('Veuillez remplir tous les champs requis.');
  }

  // Extract title and id from the URL
  const pathname = window.location.pathname;
  const segments = pathname.split("/");
  const title = segments[1];
  const id = window.location.pathname.split("/")[segments.length - 1];

  // Create the form data
  const formData = {
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    phoneNumber: phoneNumber.value.trim()
  };

  // Send the data to the server
  const response = await fetch(`http://localhost:9003/inscription-evenement/${title}/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (data.status === 'Success') {
    showSuccessMessage();
  } else {
    showErrorMessage("Une erreur s'est produite. Merci de réessayer.");
  }
};