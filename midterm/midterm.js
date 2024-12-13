function validateForm() {
    let isValid = true;

    // Username validation
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        document.getElementById('usernameError').style.display = 'inline';
        document.getElementById('username').classList.add('invalid');
        isValid = false;
    } else {
        document.getElementById('usernameError').style.display = 'none';
        document.getElementById('username').classList.remove('invalid');
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'inline';
        document.getElementById('email').classList.add('invalid');
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
        document.getElementById('email').classList.remove('invalid');
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (password.length < 8 || !passwordPattern.test(password)) {
        document.getElementById('passwordError').style.display = 'inline';
        document.getElementById('password').classList.add('invalid');
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
        document.getElementById('password').classList.remove('invalid');
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').style.display = 'inline';
        document.getElementById('confirmPassword').classList.add('invalid');
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
        document.getElementById('confirmPassword').classList.remove('invalid');
    }

    // Phone number validation
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phoneNumber)) {
        document.getElementById('phoneError').style.display = 'inline';
        document.getElementById('phoneNumber').classList.add('invalid');
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
        document.getElementById('phoneNumber').classList.remove('invalid');
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}

// Real-time validation
document.getElementById('username').addEventListener('input', validateForm);
document.getElementById('email').addEventListener('input', validateForm);
document.getElementById('password').addEventListener('input', validateForm);
document.getElementById('confirmPassword').addEventListener('input', validateForm);
document.getElementById('phoneNumber').addEventListener('input', validateForm);