const btns = document.querySelectorAll('.faq-toggle');

btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        btn.parentNode.classList.toggle('active');
    })
})
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// // Get form elements
// const form = document.getElementById('myForm');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const phoneInput = document.getElementById('phone');
// const messageInput = document.getElementById('message');

// function validateEmail(email) {
//     const emailRegex = /^\S+@\S\.\S/;
//     return emailRegex.test(email);
// }
// function validatePhone(phone) {
//     return phone.trim() !== '';
// }

// form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     let valid = true;

//     if (nameInput.value.trim() === '') {
//         alert('Please enter your full name.');
//         valid = false;
//     }

//     if (!validateEmail(emailInput.value)) {
//         alert('Please enter a valid email address.');
//         valid = false;
//     }

//     if (!validatePhone(phoneInput.value)) {
//         alert('Please enter a valid phone number.');
//         valid = false;
//     }

//     if (messageInput.value.trim() === '') {
//         alert('Please enter your message.');
//         valid = false;
//     }

//     if (valid) {
     
//         alert('Form submitted successfully.');
//         form.reset(); 
//     }
// });

