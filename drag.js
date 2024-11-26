function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();

    const passwordId = event.dataTransfer.getData("text");
    const passwordElement = document.getElementById(passwordId);

    const isStrongPassword = isPasswordStrong(passwordElement.innerText);

    if (event.target.id === 'weak-box' && !isStrongPassword) {
        event.target.querySelector('.password-container').appendChild(passwordElement);
        showPopup('Correct! This is a weak password.');
    } else if (event.target.id === 'strong-box' && isStrongPassword) {
        event.target.querySelector('.password-container').appendChild(passwordElement);
        showPopup('Correct! This is a strong password.');
    } else {
        showPopup('Incorrect drop! Try again.');
    }
}

function isPasswordStrong(password) {
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordPattern.test(password);
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.innerHTML = message;
    popup.style.display = 'block';

    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000);
}

function resetPasswords() {

    const allPasswords = document.querySelectorAll('.password');

    const weakBoxContainer = document.getElementById('weak-box').querySelector('.password-container');
    const strongBoxContainer = document.getElementById('strong-box').querySelector('.password-container');

    weakBoxContainer.innerHTML = '';
    strongBoxContainer.innerHTML = '';

    const passwordsContainer = document.querySelector('.passwords');
    allPasswords.forEach(function(password) {
        passwordsContainer.appendChild(password); 
    });

    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}