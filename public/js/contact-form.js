const form = document.getElementById('contactForm');
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
    await validateInputs();
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

const validateInputs = async () => {
  const lastname = document.getElementById('lastname');
  const firstname = document.getElementById('firstname');
  const email = document.getElementById('email');
  const phoneNumber = document.getElementById('phoneNumber');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  let hasError = false; // Track if there are any errors

  if (lastname.value.trim() === '') {
    setError(lastname, 'Veuillez remplir ce champ');
    hasError = true;
  }

  if (firstname.value.trim() === '') {
    setError(firstname, 'Veuillez remplir ce champ');
    hasError = true;
  }

  if (email.value.trim() === '') {
    setError(email, 'Veuillez remplir ce champ');
    hasError = true;
  }

  if (phoneNumber.value.trim() === '') {
    setError(phoneNumber, 'Veuillez remplir ce champ');
    hasError = true;
  }

  if (subject.value.trim() === '') {
    setError(subject, 'Veuillez remplir ce champ');
    hasError = true;
  }

  if (message.value.trim() === '') {
    setError(message, 'Veuillez remplir ce champ');
    hasError = true;
  }

  if (hasError) {
    throw new Error('Please fill in all required fields.');
  }

  const formData = {
    lastname: lastname.value.trim(),
    firstname: firstname.value.trim(),
    email: email.value.trim(),
    phoneNumber: phoneNumber.value.trim(),
    subject: subject.value.trim(),
    message: message.value.trim()
  };

  const response = await fetch('http://localhost:9003/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (data.status === 'Success') {
    showSuccessMessage();
    console.log('Message sent successfully');
  } else {
    showErrorMessage("Une erreur s'est produite, Merce de réssayer")
    throw new Error(data.message || 'Failed to send message');
  }
};
