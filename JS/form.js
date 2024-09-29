document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        clearValidationErrors();

        let isValid = true;

        if (!validateName(nameInput.value)) {
            showValidationError(nameInput, 'Name is required.');
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            showValidationError(emailInput, 'Invalid email address.');
            isValid = false;
        }

        if (!validateMessage(messageInput.value)) {
            showValidationError(messageInput, 'Message is required.');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateName(name) {
        return name.trim() !== '';
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateMessage(message) {
        return message.trim() !== '';
    }

    function showValidationError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'validation-error';
        errorElement.innerText = message;
        input.parentNode.insertBefore(errorElement, input.nextSibling);
    }

    function clearValidationErrors() {
        const errors = document.querySelectorAll('.validation-error');
        errors.forEach(function(error) {
            error.remove();
        });
    }
});
