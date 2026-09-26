// ==========================================
// SHIVANG PORTFOLIO - THEME SWITCHER
// ==========================================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Get saved theme from browser
const savedTheme = localStorage.getItem("theme");

// ==========================================
// LOAD SAVED THEME
// ==========================================

if (savedTheme === "beige") {
    document.body.classList.add("beige-theme");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
} else {
    document.body.classList.remove("beige-theme");

    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
}


// ==========================================
// THEME TOGGLE
// ==========================================

themeToggle.addEventListener("click", function () {

    // Switch theme
    document.body.classList.toggle("beige-theme");

    // Check current theme
    if (document.body.classList.contains("beige-theme")) {

        // --------------------------------------
        // LIGHT BEIGE THEME
        // --------------------------------------

        localStorage.setItem("theme", "beige");

        // Moon → Sun
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        // --------------------------------------
        // DEFAULT DARK THEME
        // --------------------------------------

        localStorage.setItem("theme", "default");

        // Sun → Moon
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
});