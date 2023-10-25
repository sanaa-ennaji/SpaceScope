  //FAQ
  const btns = document.querySelectorAll('.faq-toggle');

btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        btn.parentNode.classList.toggle('active');
    })
})
//menu
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
//Validation
function submitForm() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var outputDiv = document.getElementById('output');
    var reg = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    document.getElementById("emailError").innerHTML = '';
    document.getElementById("phoneError").innerHTML = '';
    document.getElementById("messageError").innerHTML = '';

    var isValid = true;

    if (email == "" || !reg.test(email)) {
        document.getElementById("emailError").innerHTML = " invalid email you miss @ and .";
        isValid = false;
    }

    if (phone == "") {
        document.getElementById("phoneError").innerHTML = "Phone number is empty.";
        isValid = false;
    }

    else if (!/^(\+212[-]?\d{9,})$/.test(phone)) {
        document.getElementById("phoneError").innerHTML = " start with '+212' and contain 9 numbers and without space ";
        isValid = false;
    }

    if (message == "") {
        document.getElementById("messageError").innerHTML = "empty";
        isValid = false;
    }

    if (isValid) {
        var outputText = "Email: " + email + "<br>Phone: " + phone + "<br>Text: " + message + "<br><br>";
        outputDiv.innerHTML += outputText;

        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
    }
    else {
        outputDiv.innerHTML = '';
    }
}

const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    submitForm();
});


