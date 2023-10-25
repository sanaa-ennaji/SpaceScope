// faq -----------------------------------
const btns = document.querySelectorAll('.faq-toggle');
btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        btn.parentNode.classList.toggle('active');
    })
})
// bergur menu-----------------------------------------
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// input validation
const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameInput = form.elements.name;
    const emailInput = form.elements.email;
    const phoneInput = form.elements.phone;
    const messageInput = form.elements.message;
    if (!nameInput.validity.valid) {
        alert('Please enter a valid name.');
        nameInput.focus();
    } else if (!emailInput.validity.valid) {
        alert('Please enter a valid email address.');
        emailInput.focus();
    } else if (!phoneInput.validity.valid) {
        alert('Please enter a valid phone number.');
        phoneInput.focus();
    } else if (!messageInput.validity.valid) {
        alert('Please enter a message.');
        messageInput.focus();
    } else { 
        alert('Form submitted successfully!');
    }
});