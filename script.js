// Progress bars
document.querySelectorAll(".progress").forEach((bar) => {
    const progress = bar.getAttribute("data-progress");
    if (progress) bar.style.width = progress + "%";
});

// Years counter
const nbAnnees = document.getElementById("nbAnnees");
if (nbAnnees) nbAnnees.textContent = new Date().getFullYear() - 2008;

// Theme switcher
const THEME_KEY = "cv-theme";
const themeButtons = document.querySelectorAll(".theme-btn");

function applyTheme(theme) {
    if (theme) {
        document.documentElement.setAttribute("data-theme", theme);
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
    themeButtons.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-theme") === theme);
    });
}

// Restore saved theme
applyTheme(localStorage.getItem(THEME_KEY) || "");

themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const theme = btn.getAttribute("data-theme");
        localStorage.setItem(THEME_KEY, theme);
        applyTheme(theme);
    });
});
