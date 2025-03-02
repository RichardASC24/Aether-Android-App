document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".continue-btn").addEventListener("click", () => {
        const username = document.querySelector(".input-field[type='text']").value;
        const password = document.querySelector(".input-field[type='password']").value;

        if (username && password) {
            // Redirect to home.html
            window.location.href = "home.html";
        } else {
            alert("Please enter your username and password.");
        }
    });

    document.querySelectorAll(".social-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert(`${button.textContent} clicked`);
        });
    });
});
