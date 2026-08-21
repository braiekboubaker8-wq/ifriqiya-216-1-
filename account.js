const loginForm = document.getElementById("loginForm");

const loginMessage = document.getElementById("loginMessage");


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;


    if (email === "" || password === "") {

        loginMessage.style.display = "block";

        loginMessage.textContent =
            "PLEASE COMPLETE ALL FIELDS.";

        return;
    }


    loginMessage.style.display = "block";

    loginMessage.style.color = "#f3eee4";

    loginMessage.style.borderColor = "#555";

    loginMessage.textContent =
        "LOGIN SYSTEM READY — BACKEND REQUIRED.";


});