document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Validation logic
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        if (name === '') {
            alert('Please enter your name.');
            isValid = false;
        } else if (email === '' || !validateEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        } else if (message === '') {
            alert('Please enter your message.');
            isValid = false;
        }

        if (isValid) {
            // If the form is valid, submit it
            contactForm.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
