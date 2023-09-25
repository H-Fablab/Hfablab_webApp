document.addEventListener("DOMContentLoaded", function() {
    const customAmountInput = document.getElementById("custom-amount");
    const embedContainer = document.getElementById("embed");
    const errorMessage = document.getElementById("error-message")
    const buttonContainer = document.querySelector(".button-container")
    const donationForm = document.querySelector(".donation_form");

    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const customAmount = customAmountInput.value;

        if (customAmount && parseInt(customAmount) >= 1000) {
            // Valid condition: input is filled and value is not less than 1000
            embedContainer.style.display = "block";
            donationForm.style.display = "none";
            buttonContainer.style.display = "none";

            // You can now use the customAmountValue variable for further processing
            FedaPay.init({
                public_key: 'pk_live_nMZMOq1pgMXaTIEyijtAVl4d',
                transaction: {
                  amount: customAmount,
                  description: 'Acheter mon produit'
                },
                customer: {
                  email: 'johndoe@gmail.com',
                  lastname: 'Doe',
                },
                container: '#embed' })
        } else {
            // Invalid condition: hide the embed container
            embedContainer.style.display = "none";
            errorMessage.style.display = "block";
        }  

    });
});





