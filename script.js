const form = document.getElementById('form');
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    /* displayEmail(); */
    checkEmailValidity();   
});

/* function displayEmail() {
    const emailValue= email.value;

    console.log (emailValue);
} */

function checkEmailValidity() {

    let emailValue= email.value;
    if (emailValue === "") {
        alert ("email cannot be blank");
    } else if (!isEmail(emailValue)){
        
        message.innerHTML = "invalid email entered";
    } else {
        message.innerHTML = "You have subcribed successfully";
    }

    email.value = "";
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
