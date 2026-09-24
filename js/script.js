/* JAVASCRIPT FEATURE #1: CONTACT FORM VALIDATION*/

document.addEventListener('DOMContentLoaded', function () {
    initContactFormValidation();
    initMobileNavToggle();
});


function initContactFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return; 

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('sendMessageBtn');
    const modalCheckbox = document.getElementById('toggle-modal');

    sendButton.addEventListener('click', function (e) {
        e.preventDefault();
        clearErrors();

        let isValid = true;

        // Full Name REQUIRED
        if (nameInput.value.trim() === '') {
            showError('name', 'Please enter your full name.');
            isValid = false;
        }

        // Email - REQUIRED + LOOK REAL
        if (emailInput.value.trim() === '') {
            showError('email', 'Please enter your email address.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError('email', 'Please enter a valid email address (e.g. name@example.com).');
            isValid = false;
        }

        // Subject - REQUIRED
        if (subjectInput.value.trim() === '') {
            showError('subject', 'Please enter a subject.');
            isValid = false;
        }

        // Message - REQUIRED
        if (messageInput.value.trim() === '') {
            showError('message', 'Please enter a message.');
            isValid = false;
        }

        // IF EVERY FIELD IS VALID, THE MODAL BOX COMES UP WITH SUCCESS MESSAGE
        if (isValid) {
            form.reset();
            modalCheckbox.checked = true;
        }
    });

    // DISPLAYS AN ERROR MESSAGE UNDER A SPECIFIC FIELD AND HIGHLIGHTS IT
    function showError(fieldId, message) {
        const errorSpan = document.getElementById(fieldId + 'Error');
        const inputEl = document.getElementById(fieldId);
        if (errorSpan) errorSpan.textContent = message;
        if (inputEl) inputEl.classList.add('input-error');
    }

    // CLEARS ALL ERROR MESSAGES AND HIGHLIGHT STYLING
    function clearErrors() {
        const errorSpans = form.querySelectorAll('.error-message');
        errorSpans.forEach(function (span) { span.textContent = ''; });

        const inputs = form.querySelectorAll('.input-highlight');
        inputs.forEach(function (input) { input.classList.remove('input-error'); });
    }

    // BASIC EMAIL PATTERN CHECK
    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
}

/* JAVASCRIPT FEATURE #2: MOBILE NAVIGATION TOGGLE*/

function initMobileNavToggle() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    if (!hamburger || !menu) return; // safety check, skips pages missing either element

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
}

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