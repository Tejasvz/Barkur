// Common header loading and initialization script
document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Apply dark mode if saved in localStorage
            if (localStorage.getItem("darkMode") === "enabled") {
                document.body.classList.add("dark-mode");
                const icon = document.getElementById("modeIcon");
                if (icon) icon.textContent = "☀️";
            }

            // Setup dark mode toggle button
            const darkModeToggle = document.getElementById("darkModeToggle");
            if (darkModeToggle) {
                darkModeToggle.addEventListener("click", function () {
                    const isDark = document.body.classList.toggle("dark-mode");
                    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

                    const icon = document.getElementById("modeIcon");
                    if (icon) {
                        icon.classList.add("rotate");
                        setTimeout(() => {
                            icon.textContent = isDark ? "☀️" : "🌙";
                            icon.classList.remove("rotate");
                        }, 300);
                    }
                });
            }

            // Logo click counter for admin button reveal (standardized to 3 clicks)
            let logoClickCount = 0;
            const logo = document.getElementById("barkur-logo");
            if (logo) {
                logo.addEventListener("click", () => {
                    logoClickCount++;
                    if (logoClickCount >= 6) {
                        const adminBtn = document.querySelector(".admin-btn");
                        if (adminBtn) {
                            adminBtn.classList.remove("hidden");
                        }
                    }
                });
            }
        })
        .catch(error => console.error('Error loading header:', error));
});
