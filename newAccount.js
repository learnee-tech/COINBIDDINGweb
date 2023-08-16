document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.querySelector('[name="confirm_password"]');
    const passwordError = document.getElementById("password-error");
    const signUpForm = document.forms["signup_form"];

    usernameInput.addEventListener("input", function() {
        const username = usernameInput.value.trim();
        const usernameError = document.getElementById("username-error");
        if (/\d/.test(username)) {
            usernameError.textContent = "Username should not contain numbers.";
            usernameError.style.color = "red";
        } else {
            usernameError.textContent = "";
            usernameError.style.color = "";
        }
    });

    signUpForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        clearErrorMessages();

        let hasError = false;

        // Validate username: should not contain numbers
        if (/\d/.test(username)) {
            setError(usernameInput, "Username should not contain numbers.");
            hasError = true;
        }

        // Validate password: length between 6 and 18 characters
        if (password.length < 6 || password.length > 18) {
            setError(passwordInput, "Password should be between 6 and 18 characters.");
            hasError = true;
        }

        // Validate confirm password
        if (password !== confirmPassword) {
            document.getElementById("message2").innerHTML = "Passwords are not same";  
            return false;  
          } else {  
            alert ("Your password created successfully");  
          }  
        

        if (!hasError) {
            // Proceed with form submission
            signUpForm.submit();
        }

    });

    function setError(inputElement, errorMessage) {
        const errorElement = inputElement.nextElementSibling;
        errorElement.textContent = errorMessage;
        errorElement.style.color = "red";
    }

    function clearErrorMessages() {
        const errorElements = signUpForm.querySelectorAll(".error-message");
        errorElements.forEach(function(errorElement) {
            errorElement.textContent = "";
        });
    }
});
