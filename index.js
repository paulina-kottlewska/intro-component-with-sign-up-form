const inputs = document.querySelectorAll("input");
const submit = document.querySelector(".sign-up");
const emailInput = document.querySelector('input[type="email"]');
const errorMsgEmail = document.querySelector(".error-msg-email");


submit.addEventListener("click", (e) => {
    e.preventDefault();

    inputs.forEach(input => {
        // Points to the error message element which is the next sibling of the input
        const errorMsg = input.nextElementSibling;

        // Checks if the current input type is not an email
        if(input.type !== "email") {
            if(input.value === "") {
                input.placeholder = "";
                input.classList.add("invalid");
                errorMsg.hidden = false;
            } else {
                input.classList.remove("invalid");
                errorMsg.hidden = true;
            }
        }
    });
     // Calls the function to validate the email input field
    validateEmailInput();
})


// Adding an 'input' event listener to each input field
inputs.forEach(input => input.addEventListener("input", () => {
    if(input.value !== "") {
        input.classList.remove("invalid");
        const errorMsg = input.nextElementSibling;
        errorMsg.hidden = true;

        // If the input field is of type email, validates the email
        if(input.type === "email") {
            validateEmailInput();
        }
    }
}))

// Function to validate the email input field
function validateEmailInput() {
    // If the email input field is empty
    if(emailInput.value === "") {
        emailInput.placeholder = "";
        emailInput.classList.add("invalid");
        errorMsgEmail.hidden = false;
        errorMsgEmail.textContent = "Email cannot be empty";
    // If the input is not a valid email
    } else if(!validateEmail(emailInput.value)) {
        emailInput.placeholder = "email@example.com";
        emailInput.classList.add("invalid");
        errorMsgEmail.hidden = false;
        errorMsgEmail.textContent = "Looks like this is not an email";
    } else {
        emailInput.classList.remove("invalid");
        errorMsgEmail.hidden = true;
    }
}

// Function to validate an email using a regular expression
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}