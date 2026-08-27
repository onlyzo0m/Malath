document.addEventListener('DOMContentLoaded', function () {
    let htmlTag = document.documentElement;
    let themeToggleBtn = document.getElementById('themeToggleBtn');
    let themeIcon = document.getElementById('themeIcon');
    let loginImg = document.getElementById('loginImg');

    let savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            let currentTheme = htmlTag.getAttribute('data-bs-theme') || 'light';
            let newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

    function applyTheme(theme) {
        htmlTag.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);

        if (themeIcon && themeToggleBtn) {
            if (theme === 'dark') {
                themeIcon.className = 'bi bi-sun-fill';
                themeToggleBtn.className = 'btn btn-outline-warning rounded-circle';
            } else {
                themeIcon.className = 'bi bi-moon-stars-fill';
                themeToggleBtn.className = 'btn btn-outline-secondary rounded-circle';
            }
        }

        if (loginImg) {
            if (theme === 'dark') {
                loginImg.src = './assets/login photo dark.jpg';
            } else {
                loginImg.src = './assets/login Photo.jpg';
            }
        }
    }
});