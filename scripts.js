document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('successMessage').style.display = 'none';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Le nom est requis.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'L\'adresse e-mail est requise.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'L\'adresse e-mail n\'est pas valide.';
        isValid = false;
    }

    // Validate phone
    const phonePattern = /^[0-9]{8}$/;
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Le téléphone est requis.';
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Le numéro de téléphone n\'est pas valide.';
        isValid = false;
    }

    // Show success message if all fields are valid
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Formulaire soumis avec succès!';
        document.getElementById('successMessage').style.display = 'block';
        // Optionally, clear the form fields
        document.getElementById('contactForm').reset();
    }
});

