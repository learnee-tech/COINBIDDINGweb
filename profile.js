document.addEventListener("DOMContentLoaded", function() {
    const profileButton = document.getElementById("profile-button");
    const profileDropdown = document.getElementById("profile-dropdown");

    profileButton.addEventListener("click", function() {
        profileDropdown.classList.toggle("show");
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches(".profile-button")) {
            if (profileDropdown.classList.contains("show")) {
                profileDropdown.classList.remove("show");
            }
        }
    });
});
