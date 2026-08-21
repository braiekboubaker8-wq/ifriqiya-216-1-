const SUPABASE_URL = "YOUR_PROJECT_URL";
const SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
const registerForm = document.getElementById("registerForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const terms = document.getElementById("terms");
const message = document.getElementById("message");


registerForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    message.textContent = "";
    message.className = "message";


    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;


    // CHECK NAME
    if (nameValue.length < 3) {
        showError("Please enter your full name.");
        return;
    }


    // CHECK PASSWORD
    if (passwordValue.length < 6) {
        showError("Password must contain at least 6 characters.");
        return;
    }


    // CHECK PASSWORD MATCH
    if (passwordValue !== confirmPasswordValue) {
        showError("Passwords do not match.");
        return;
    }


    // CHECK TERMS
    if (!terms.checked) {
        showError("Please accept the terms and conditions.");
        return;
    }


    // CREATE REAL ACCOUNT
    const { data, error } =
        await supabaseClient.auth.signUp({

            email: emailValue,

            password: passwordValue,

            options: {

                data: {
                    full_name: nameValue,
                    phone: phoneValue
                }

            }

        });


    // ERROR
    if (error) {

        showError(error.message);

        return;
    }


    // SUCCESS
    message.textContent =
        "ACCOUNT CREATED! CHECK YOUR EMAIL.";

    message.className =
        "message success";


    registerForm.reset();

});


function showError(text) {

    message.textContent = text;

    message.className = "message error";

}