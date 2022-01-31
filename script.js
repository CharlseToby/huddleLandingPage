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
        window.confirm ("email cannot be blank");
        window.location.reload();
    } else if (!isEmail(emailValue)){
        
        message.innerHTML = "invalid email entered";
    } else {
        message.innerHTML = "Check your email please";
    }

    email.value = "";
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
