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

    document.querySelector(".category1-btn").addEventListener("click", () => {
       
            window.location.href = "interest_page.html";
    });

    document.querySelectorAll(".social-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert(`${button.textContent} clicked`);
        });
    });
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const interestsBtn = document.getElementById("interests-btn");
    const searchBtn = document.getElementById("search-btn");

    if (interestsBtn) {
        interestsBtn.addEventListener("click", () => {
            window.location.href = "interest.html";
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", () => {
            window.location.href = "search.html";
        });
    }
});




