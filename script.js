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
