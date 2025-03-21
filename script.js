document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    let isDarkMode = localStorage.getItem("dark-mode") === "true";

    function applyTheme() {
        document.body.classList.toggle("dark-mode", isDarkMode);
        themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
    }

    themeToggle.addEventListener("click", function() {
        isDarkMode = !isDarkMode;
        localStorage.setItem("dark-mode", isDarkMode);
        applyTheme();
    });

    applyTheme();
});
