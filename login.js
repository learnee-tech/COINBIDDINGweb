document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("username-error");
    const errorMessage = document.getElementById("errorMessage");

    usernameInput.addEventListener("input", function() {
        const username = usernameInput.value;
        if (/[\d]/.test(username)) {
            usernameError.textContent = "Username should not contain numbers.";
            usernameError.style.color = "red";
        } else {
            usernameError.textContent = "";
        }
    });

    const loginForm = document.querySelector(".loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        errorMessage.innerHTML = ""; // Clear any previous error messages

        // Validate username: should not contain numbers
        if (/[\d]/.test(username)) {
            errorMessage.innerHTML += "Username should not contain numbers.<br>";
            
        }

        // Validate password: minimum length of 6 characters
        if (password.length < 6) {
            errorMessage.innerHTML += "Password should be at least 6 characters long.<br>";
            errorMessage.style.color = "red";
        }

        if (errorMessage.innerHTML !== "") {
            return; // Stop further processing if there are errors
        }

        // Here, you would typically perform an AJAX request to your server to check login credentials
        // For demonstration purposes, let's assume a hardcoded valid username and password
        const validUsername = "user123";
        const validPassword = "password123";

        if (username === validUsername && password === validPassword) {
            // Successful login
            errorMessage.innerHTML = ""; // Clear any existing error messages
            //window.location.href = "dashboard.html"; // Redirect to dashboard or another page
        } else {
            errorMessage.innerHTML = "Invalid credentials.<br>";
        }
    });
});
