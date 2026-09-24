//JAVASCRIPT FEATURE #1: CONTACT FORM VALIDATION

// Event Listener for Contact Form Validation and Mobile Menu Nav Toggle
document.addEventListener('DOMContentLoaded', function () {
    initContactFormValidation();
    initMobileNavToggle();
});

//Main function that validates the input for the contact form 
function initContactFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return; 

    //Variables for contact form inputs + send button and modal box with the confirmation messgage
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('sendMessageBtn');
    const modalCheckbox = document.getElementById('toggle-modal');

    sendButton.addEventListener('click', function (e) {
        e.preventDefault();
        clearErrors();

        // isValid Boolean is initially true, then the function will run checks (if-statements below)
        // that can trigger it to become false, and display corresponding error messages
        let isValid = true;

        // If user enters nothing for the name, isValid boolean is set to false
        // and they get an error message
        if (nameInput.value.trim() === '') {
            showError('name', 'Please enter your full name.');
            isValid = false;
        }

        // Checks to see the user enters input that isnt just whitespace
        // The elseif statement checks that the email is valid and if not a valid email
        // displays appropriate error
        if (emailInput.value.trim() === '') {
            showError('email', 'Please enter your email address.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError('email', 'Please enter a valid email address (e.g. name@example.com).');
            isValid = false;
        }

        // Ensures the subject input isnt empty, if so, displays error message
        if (subjectInput.value.trim() === '') {
            showError('subject', 'Please enter a subject.');
            isValid = false;
        }

        // Ensures the message input isnt empty, if so, displays error message
        if (messageInput.value.trim() === '') {
            showError('message', 'Please enter a message.');
            isValid = false;
        }

        // If every field passes the checks above, THEN and only then
        // the modal box comes up saying "Message Sent Successfully" refer to contact.html
        if (isValid) {
            form.reset();
            modalCheckbox.checked = true;
        }
    });

    // Function to display error messages under the contact form specific fields, and highlight it in red
    function showError(fieldId, message) {
        const errorSpan = document.getElementById(fieldId + 'Error');
        const inputEl = document.getElementById(fieldId);
        if (errorSpan) errorSpan.textContent = message;
        if (inputEl) inputEl.classList.add('input-error');
    }

    // This function clears all the error messages and corresponding styling
    // so the original look of the form is restored.
    function clearErrors() {
        const errorSpans = form.querySelectorAll('.error-message');
        errorSpans.forEach(function (span) { span.textContent = ''; });

        const inputs = form.querySelectorAll('.input-highlight');
        inputs.forEach(function (input) { input.classList.remove('input-error'); });
    }

    // Basic function for email pattern check
    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
}

/* JAVASCRIPT FEATURE #2: MOBILE NAVIGATION TOGGLE*/

// Function to create a hamburger menu ONLY FOR MOBILE that shows/hides
// the different menu items when the icon is clicked
function initMobileNavToggle() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    const label = document.querySelector('.hamburger-label');

    if (!hamburger || !menu) return;

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('open');
        if (label) label.classList.toggle('hidden');
    });
}
